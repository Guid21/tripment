import React, { useCallback } from 'react';

import { IFiltersState, initialFilters } from '../../Filters';

interface IClearFilters {
  setFilters: React.Dispatch<React.SetStateAction<IFiltersState>>;
}

const ClearFilters = ({ setFilters }: IClearFilters) => {
  const clearFilters = useCallback(() => setFilters(initialFilters), [
    setFilters,
  ]);

  return (
    <button
      type="button"
      className="t-btn t-btn_link t-btn_dangerous t-btn_underline"
      onClick={clearFilters}
    >
      <span>Clear filters</span>
    </button>
  );
};

export default ClearFilters;
