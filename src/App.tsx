import { Separator } from '@/components/custom/Separator';
import { CutOffDate } from '@/components/custom/CutOffDate';
import { SearchInput } from '@/components/custom/SearchInput';
function App() {
  return (
    <>
      <Separator text="Event 1" variant="teal" />
      <Separator text="Event 2" variant="indigo" />
      <CutOffDate date={new Date()} text="Cut Off Date" />
      <SearchInput />
    </>
  );
}

export default App;
