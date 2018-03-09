import React from 'react';

export default function SelectBox(props) {
  const { value, onChange, options } = props;
  return (
    <select value={value} onChange={e => onChange(e.target.value)}>
      {options.map(item => {
        return (
          <option key={`${item.value}${item.label}`} value={item.value}>
            {item.label}
          </option>
        );
      })}
    </select>
  );
}
