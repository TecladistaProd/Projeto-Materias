import Filters from "@/Model/Filters";
import { IFiltersContext } from "@/interfaces/filtersContext";
import { createContext } from "react";

const filtersContext = createContext<IFiltersContext>({
  filters: new Filters(),
  handleFilters() {
    return null;
  },
  resetFilters() {
    return null;
  },
});

export default filtersContext;
