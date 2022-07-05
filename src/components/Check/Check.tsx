import React, { FC } from 'react';
import { BsCheck } from 'react-icons/bs';
import cn from 'classnames';

interface ICheckProps {
  isCompleted: boolean;
}

const Check: FC <ICheckProps> = ({ isCompleted }) => (
  <div
    className={cn(
      'border-2 rounded-lg border-pink-400 w-6 h-6 mr-3 flex items-center justify-center',
      {
        'bg-pink-400': isCompleted,
      },
    )}
  >
    {isCompleted && <BsCheck size={24} className="text-gray-900" />}
  </div>
);

export default Check;
