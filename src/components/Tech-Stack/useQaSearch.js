import { useState, useEffect, useMemo } from 'react';
import { filterQaList } from './filterQaList';

export const SEARCH_DEBOUNCE_MS = 300;

export function useQaSearch(fullList) {
    const [searchInput, setSearchInput] = useState('');
    const [debouncedSearch, setDebouncedSearch] = useState('');

    useEffect(() => {
        if (searchInput === '') {
            setDebouncedSearch('');
            return;
        }
        const timer = setTimeout(() => {
            setDebouncedSearch(searchInput);
        }, SEARCH_DEBOUNCE_MS);
        return () => clearTimeout(timer);
    }, [searchInput]);

    const filteredList = useMemo(
        () => filterQaList(fullList, debouncedSearch),
        [fullList, debouncedSearch]
    );

    return { searchInput, setSearchInput, debouncedSearch, filteredList };
}
