import React from "react";

export const FilterStatus = ({ setStatus, status, setCurrentPage, url }) => {
  const handleChange = (e) => {
    setStatus({ status: e.target.value });
    setCurrentPage(1);
  };

  return (
    <div className="filter-select" onChange={handleChange}>
      <select value={status}>
        <option defaultValue value="">
          Choose status
        </option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
    </div>
  );
};
