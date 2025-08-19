import data from '@/assets/data/combined_rooming_data.json' assert { type: 'json' };

export type JsonData = typeof data;
export type Event = JsonData[number];
export type Booking = Event['bookings'][number];

export interface IFilters {
  text?: string;
  status?: string[];
}

export interface IFilterButtonValues {
  value: string;
  label: string;
}

export type HandleFilterButtonValues = (filter: string[]) => void;
