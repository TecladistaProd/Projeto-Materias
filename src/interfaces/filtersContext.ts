import Filters from "@/Model/Filters";

export interface IFiltersContext {
  filters: Filters;
  handleFilters: (key: keyof Filters, value: string | string[]) => void;
  resetFilters: () => void;
}
