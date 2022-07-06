import React, { DetailedHTMLProps, FC, SelectHTMLAttributes } from 'react';

interface IOptions {
  value: string;
  title: string;
}

interface ISelectProps
  extends DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement> {
  options: IOptions[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: FC <ISelectProps> = ({
  options, defaultValue, value, onChange,
}) => (
  <select
    value={value}
    className="bg-pink-600 mb-5 rounded-lg p-2"
    onChange={onChange}
  >
    <option disabled value="">{defaultValue}</option>
    {options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.title}
      </option>
    ))}
  </select>
);

export default Select;
