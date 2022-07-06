import React, { Dispatch, FC, SetStateAction } from 'react';
import Select from '../Select/Select';
import { IParams } from '../../api/types/params';

interface ISortProps {
  setParams: Dispatch<SetStateAction<IParams>>;
}

const Sort: FC <ISortProps> = ({ setParams }) => {
  const filterMenu = [
    { title: 'Все', value: 'all' } as const,
    { title: 'Выполненные', value: 'true' } as const,
    { title: 'Невыполненные', value: 'false' } as const,
  ];
  const clickHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setParams((prev) => ({ ...prev, completed: value === 'all' ? undefined : value }));
  };

  return (
    <Select options={filterMenu} onChange={clickHandler} />
  );
};

export default Sort;
