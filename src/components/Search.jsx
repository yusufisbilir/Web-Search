import React, { useState, useEffect } from 'react';
import { useDebounce } from 'use-debounce/lib';
import { useResultContext } from '../contexts/ResultContextProvider';
import { Links } from './Links';

export const Search = () => {
  const [text, setText] = useState('Youtube');
  const { setSearchTerm } = useResultContext();
  const [debouncedValue] = useDebounce(text, 300);

  useEffect(() => {
    if (debouncedValue) setSearchTerm(debouncedValue);
  }, [debouncedValue]);

  return (
    <div className="mt-3">
      <input
        type="text"
        value={text}
        className="sm:w-96 w-80 h-10 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg"
        placeholder="Search"
        onChange={(e) => setText(e.target.value)}
      />
      <Links />
    </div>
  );
};
