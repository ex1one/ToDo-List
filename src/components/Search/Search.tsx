import React, { Dispatch, FC, SetStateAction } from 'react';
import Input from '../Input/Input';
import { IParams } from '../../api/types/params';

interface ISearchProps {
  setParams: Dispatch<SetStateAction<IParams>>;
}

const Search: FC <ISearchProps> = ({ setParams }) => {
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setParams((prev) => ({ ...prev, query: event.target.value }));
  };

  return (
    <Input
      placeholder="Поиск"
      onChange={changeHandler}
      type="text"
    />
  );
};

export default Search;
