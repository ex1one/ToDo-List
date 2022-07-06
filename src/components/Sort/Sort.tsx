import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import cn from 'classnames';

export interface IFilter {
  query: string;
  sort: string;
}

interface ISortProps {
  setFilter: Dispatch<SetStateAction<IFilter>>;
}

const Sort: FC <ISortProps> = ({ setFilter }) => {
  const [activeItem, setActiveItem] = useState(0);

  const filterMenu = [
    { title: 'Все', value: 'all' } as const,
    { title: 'Выполненные', value: 'completed' } as const,
    { title: 'Невыполненные', value: 'unfulfilled' } as const,
  ];

  const clickHandler = (index: number, event: React.FormEvent<HTMLUListElement>) => {
    // setFilter((prev) => ({ ...prev, sort: event.currentTarget.value }));
    setActiveItem(index);
  };

  return (
    <ul className="text-white flex justify-center gap-2 font-semibold mb-8">
      {filterMenu.map((item, index) => (
        <li
          onClick={(event) => clickHandler(index, event)}
          value={item.value}
          className={cn(
            'cursor-pointer',
            activeItem === index ? 'text-pink-600' : '',
          )}
          key={item.title}
        >
          {item.title}
        </li>
      ))}
    </ul>
  );
};

export default Sort;
