import React from "react";

const sportOptions = [
  { key: 'cr', value: 'cr', text: 'Cricket' },
  { key: 'ru', value: 'ru', text: 'Rugby' },
  { key: 'fb', value: 'fb', text: 'Football' },
]

const DropdownList = () => {
  return (
    <div>
      <select className="ui dropdown">
        <option value="">Gender</option>
        <option value="1">Male</option>
        <option value="0">Female</option>
      </select>
    </div>
  );
};

export default DropdownList;