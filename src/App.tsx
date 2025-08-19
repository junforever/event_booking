import { Header } from '@/components/custom/Header';
import { processData } from '@/lib/processData';
import { Separator } from '@/components/custom/Separator';
import { RfpCard } from '@/components/custom/RfpCard';
import { getBookingDateRange } from '@/lib/processData';
import { parseISO } from 'date-fns';

const filters = [
  { value: 'active', label: 'Active' },
  { value: 'closed', label: 'Closed' },
  { value: 'canceled', label: 'Canceled' },
];

function App() {
  const data = processData();
  console.log(data);

  const handleFilters = (filters: string[]) => {
    console.log(filters);
  };

  const handleViewBookings = () => {
    console.log('View bookings');
  };

  return (
    <main className="p-8">
      <Header
        title="Rooming List Management: Events"
        filters={filters}
        handleFilters={handleFilters}
        className="mb-6"
      />

      <section className="flex flex-col gap-y-12">
        {data.map((item, index) => (
          <div key={item.eventId} className="flex flex-col gap-y-4">
            <Separator text={item.eventName} variant={index % 2 === 0 ? 'indigo' : 'teal'} />
            <div className="flex gap-x-4">
              {item.bookingsList.map(booking => {
                const dates = getBookingDateRange(booking.bookings);
                return (
                  <RfpCard
                    key={booking.roomingListId}
                    rfpName={booking.rfpName}
                    agreement={booking.agreement_type}
                    checkInDate={dates?.minCheckIn ? parseISO(dates.minCheckIn) : ''}
                    checkOutDate={dates?.maxCheckOut ? parseISO(dates.maxCheckOut) : ''}
                    cutOffDate={parseISO(booking.cutOffDate)}
                    bookingsCount={booking.bookings.length}
                    onViewBookings={handleViewBookings}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

export default App;
