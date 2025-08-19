import { Header } from '@/components/custom/Header';
import { useStaticJsonData } from '@/hooks/useStaticJsonData';
import { Separator } from '@/components/custom/Separator';
import { RfpCard } from '@/components/custom/RfpCard';
import { getBookingDateRange, getExistingStatus } from '@/lib/processData';
import { SearchInput } from '@/components/custom/SearchInput';
import { FilterButton } from '@/components/custom/FilterButton';
import { useMemo } from 'react';

function App() {
  const { filteredDataList, filterValues, setFilterValues, originalData } = useStaticJsonData();
  const existingStatus = useMemo(() => getExistingStatus(originalData), [originalData]);
  const handleStatusFilter = (status: string[]) => {
    setFilterValues(prev => ({ ...prev, status }));
  };

  const handleTextFilter = (text: string) => {
    setFilterValues(prev => ({ ...prev, text }));
  };

  const handleViewBookings = () => {
    console.log('View bookings');
  };

  return (
    <main className="p-8">
      <Header title="Rooming List Management: Events" className="mb-6">
        <SearchInput value={filterValues.text || ''} onChange={handleTextFilter} />
        <FilterButton
          filterButtonLabel="Filters"
          filterOptions={existingStatus}
          handleFilters={handleStatusFilter}
        />
      </Header>

      <section className="flex flex-col gap-y-12">
        {filteredDataList.map(
          (item, index) =>
            item.bookingsList.length > 0 && (
              <div key={item.eventId} className="flex flex-col gap-y-4">
                <Separator text={item.eventName} variant={index % 2 === 0 ? 'teal' : 'indigo'} />
                <div className="flex gap-x-4 scroll-container pb-4">
                  {item.bookingsList.map(booking => {
                    const dates = getBookingDateRange(booking.bookings);
                    return (
                      <RfpCard
                        key={booking.roomingListId}
                        rfpName={booking.rfpName}
                        agreement_type={booking.agreement_type}
                        checkInDate={dates?.minCheckIn || ''}
                        checkOutDate={dates?.maxCheckOut || ''}
                        cutOffDate={booking.cutOffDate}
                        bookingsCount={booking.bookings.length}
                        onViewBookings={handleViewBookings}
                      />
                    );
                  })}
                </div>
              </div>
            )
        )}
      </section>
    </main>
  );
}

export default App;
