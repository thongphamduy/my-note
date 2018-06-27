import React from 'react';
import Select from 'react-select';

const SelectCategory = ({ categories, handleFilterChange }) => (
  <Select
  options={categories}
  placeholder="Filter by Category"
  isClearable={true}
  onChange={newValue => handleFilterChange(newValue)}/>
);

export default SelectCategory;
