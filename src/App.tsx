import { Separator } from '@/components/custom/Separator';
import { CutOffDate } from '@/components/custom/CutOffDate';
import { SearchInput } from '@/components/custom/SearchInput';
import { FilterButton } from '@/components/custom/FilterButton';
function App() {
  const items = [
    { value: 'active', label: 'Active' },
    { value: 'closed', label: 'Closed' },
    { value: 'canceled', label: 'Canceled' },
  ];
  return (
    <>
      <Separator text="Event 1" variant="teal" />
      <Separator text="Event 2" variant="indigo" />
      <CutOffDate date={new Date()} text="Cut Off Date" />
      <FilterButton filterButtonLabel="Filters" filters={items} handleFilters={() => {}} />
      <SearchInput />
    </>
  );
}

export default App;
