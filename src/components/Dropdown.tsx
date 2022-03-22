import React, { ChangeEvent } from 'react';

interface Props {
  label?: string;
  items?: Array<string>;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const Dropdown = ({ label, items, onChange }: Props) => {
  return (
    <>
      <label>{label}</label> &nbsp;

      <select onChange={onChange}>
        {items?.map(item => <option key={item} value={item}>{item}</option>)}
      </select>
    </>
  )
}

export default Dropdown;