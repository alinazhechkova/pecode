import React from "react";

export const FilterDimension = ({ setDimension, setCurrentPage }) => {
  const handleChange = (e) => {
    setDimension({ dimension: e.target.value });
    setCurrentPage(1);
  };

  const dimensions = [
    "Dimension C-137",
    "Post-Apocalyptic Dimension",
    "Replacement Dimension",
    "Cronenberg Dimension",
    "Fantasy Dimension",
    "Dimension 5-126",
    "Evil Rick's Target Dimension",
    "Eric Stoltz Mask Dimension",
    "Dimension J19ζ7",
    "Dimension K-83",
    "Cromulon Dimension",
    "Testicle Monster Dimension",
    "Dimension D716-B",
    "Dimension D716",
    "Dimension D99",
    "Dimension K-22",
    "Giant Telepathic Spiders Dimension",
    "unknown",
  ];

  return (
    <div className="filter-select" onChange={handleChange}>
      <select>
        <option defaultValue value="">
          Choose dimension:
        </option>
        {dimensions.map((dimension) => (
          <option value={dimension} key={dimension}>
            {dimension}
          </option>
        ))}
      </select>
    </div>
  );
};
