import React, { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react';
import { observer } from 'mobx-react-lite';

interface IInputProps
  extends DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
  > {
  type: string;
}

const Input: FC <IInputProps> = ({ type, placeholder, onChange, onKeyPress, ...props }) => (
  <div className="flex items-center justify-between mb-4 rounded-2xl border-zinc-800 border-2 px-5 py-3 w-full">
    <input
      type={type}
      onChange={onChange}
      onKeyPress={onKeyPress}
      placeholder={placeholder}
      className="bg-transparent w-full border-none outline-none"
      {...props}
    />
  </div>
);

export default observer(Input);
