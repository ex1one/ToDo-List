import React, { Dispatch, FC, SetStateAction } from 'react';
import Select from '../Select/Select';

export interface IFilter {
  query: string;
  sort: string;
}

interface ISortProps {
  setFilter: Dispatch<SetStateAction<IFilter>>;
}

const Sort: FC <ISortProps> = ({ setFilter }) => {
  const filterMenu = [
    { title: 'Все', value: 'all' } as const,
    { title: 'Выполненные', value: 'completed' } as const,
    { title: 'Невыполненные', value: 'unfulfilled' } as const,
  ];

  const clickHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setFilter((prev) => ({ ...prev, sort: value }));
  };

  return (
    <Select options={filterMenu} onChange={clickHandler} />
  );
};

export default Sort;
