import { useCallback, useState, useEffect, useMemo } from 'react';
import type { JsonData, Event, IFilters } from '@/types/IData';
import data from '@/assets/data/combined_rooming_data.json';

type ProcessedData = {
  eventId: number;
  eventName: string;
  bookingsList: JsonData;
};

function processData(): ProcessedData[] {
  const map = new Map<number, ProcessedData>();

  data.forEach(item => {
    if (!map.has(item.eventId)) {
      map.set(item.eventId, {
        eventId: item.eventId,
        eventName: item.eventName,
        bookingsList: [],
      });
    }
    map.get(item.eventId)!.bookingsList.push(item);
  });

  return Array.from(map.values());
}

function filterData(data: Event[], filters: IFilters) {
  const keys = Object.keys(filters) as (keyof IFilters)[];

  return data.filter(item =>
    keys.every(key => {
      if (key === 'text' && filters.text) {
        return (
          item.rfpName.toLowerCase().includes(filters.text.toLowerCase()) ||
          item.agreement_type.toLowerCase().includes(filters.text.toLowerCase())
        );
      }
      if (
        key === 'status' &&
        filters.status &&
        Array.isArray(filters.status) &&
        filters.status.length > 0
      ) {
        return filters.status.includes(item.status.toLowerCase());
      }
      return true;
    })
  );
}

export const useStaticJsonData = () => {
  const dataList = useMemo(() => processData(), []);
  const [filterValues, setFilterValues] = useState<IFilters>({});
  const [filteredDataList, setFilteredDataList] = useState(dataList);

  const filteredData = useCallback(
    (filters: IFilters) => {
      const filtered = dataList.map(item => {
        return {
          ...item,
          bookingsList: filterData(item.bookingsList, filters),
        };
      });
      return filtered;
    },
    [dataList]
  );

  useEffect(() => {
    setFilteredDataList(filteredData(filterValues));
  }, [filteredData, filterValues]);

  return {
    originalData: data,
    filteredDataList,
    filterValues,
    setFilterValues,
  };
};
