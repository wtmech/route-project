import React from "react";

import { FormControl } from "react-bootstrap";

const Select = ({ options, value, handleChange, name }) => {
  const optionChoices = options.map((option, i) => {
    return (
      <option key={i} value={option}>
        {option}
      </option>
    );
  });
  return (
    <FormControl
      componentClass="select"
      name={name}
      value={value}
      onChange={handleChange}
    >
      {optionChoices}
    </FormControl>
  );
};

export default Select;
