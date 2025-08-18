import { Separator } from '@/components/custom/Separator';
import { CutOffDate } from '@/components/custom/CutOffDate';
import { SearchInput } from '@/components/custom/SearchInput';
import { FilterButton } from '@/components/custom/FilterButton';
import { RfpCard } from '@/components/custom/RfpCard';
function App() {
  const items = [
    { value: 'active', label: 'Active' },
    { value: 'closed', label: 'Closed' },
    { value: 'canceled', label: 'Canceled' },
  ];
  return (
    <main className="p-8">
      <h1 className="text-32 text-neutral-850 font-semibold leading-32">
        Rooming List Management: Events
      </h1>
      <Separator text="Event 1" variant="teal" />
      <Separator text="Event 2" variant="indigo" />
      <CutOffDate date={new Date()} text="Cut Off Date" />
      <FilterButton filterButtonLabel="Filters" filters={items} handleFilters={() => {}} />
      <SearchInput />
      <RfpCard
        rfpName="ACL-2025"
        agreement="Leisure"
        checkInDate={new Date()}
        checkOutDate={new Date()}
        cutOffDate={new Date()}
        bookingsCount={5}
        onViewBookings={() => {}}
      />
    </main>
  );
}

export default App;
