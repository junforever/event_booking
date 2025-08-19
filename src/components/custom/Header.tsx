import { SearchInput } from '@/components/custom/SearchInput';
import { FilterButton } from '@/components/custom/FilterButton';
import type { IFilter, HandleFilters } from '@/types/IFilter';

interface HeaderProps {
  title: string;
  filters: IFilter[];
  handleFilters: HandleFilters;
  className?: string;
}
export const Header = ({ title, filters, handleFilters, className }: HeaderProps) => {
  return (
    <header className={`flex flex-col gap-y-8 ${className}`}>
      <h1 className="text-32 text-neutral-850 font-semibold leading-32">{title}</h1>
      <div className="flex gap-x-4">
        <SearchInput />
        <FilterButton filterButtonLabel="Filters" filters={filters} handleFilters={handleFilters} />
      </div>
    </header>
  );
};
