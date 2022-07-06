import React, { Dispatch, FC, SetStateAction } from 'react';
import { IFilter } from '../Sort/Sort';

interface ISearchProps {
  setFilter: Dispatch<SetStateAction<IFilter>>;
}

const Search: FC <ISearchProps> = ({ setFilter }) => {
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter((prev) => ({ ...prev, query: event.target.value }));
  };

  return (
    <div
      className="flex items-center justify-between mb-4 rounded-2xl border-zinc-800 border-2 px-5 py-3 w-full"
    >
      <input
        type="text"
        onChange={changeHandler}
        placeholder="Поиск"
        className="bg-transparent w-full border-none outline-none"
      />
    </div>
  );
};

export default Search;
