import { Input } from '@/components/ui/input';
import SearchIcon from '@/assets/svg/searchIcon.svg?react';

export function SearchInput() {
  return (
    <div className="relative w-full max-w-sm">
      <SearchIcon className="absolute left-1 top-1/2 -translate-y-1/2 text-slate-450 size-10" />
      <Input
        type="text"
        placeholder="Search"
        className="pl-12 pr-4 py-2 border-slate-150 h-12 shadow-none"
      />
    </div>
  );
}
