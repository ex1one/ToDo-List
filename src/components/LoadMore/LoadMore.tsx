import React, { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import { IParams } from '../../api/types/params';

interface ILoadMoreProps {
  setParams: Dispatch<SetStateAction<IParams>>;
}

const LoadMore: FC <ILoadMoreProps> = ({ setParams }) => {
  const [counter, setCounter] = useState(8);

  const loadMore = () => {
    setCounter((prev) => prev + 8);
  };

  useEffect(() => {
    setParams((prev) => ({ ...prev, _limit: counter }));
  }, [counter]);

  return (
    <div className="flex mx-auto my-5">
      <button
        onClick={loadMore}
        className="mx-auto bg-pink-600 p-3 rounded-lg"
      >
        Load More
      </button>
    </div>
  );
};

export default LoadMore;
