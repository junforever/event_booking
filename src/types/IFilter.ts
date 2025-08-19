export interface IFilter {
  value: string;
  label: string;
}

export type HandleFilters = (filter: string[]) => void;
