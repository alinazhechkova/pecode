import React, { Fragment } from "react";
import { FilterGender } from "./filterGender";
import { FilterStatus } from "./FilterStatus";

export const FilterCharacters = ({
  setSpecies,
  setGender,
  setStatus,
  setCurrentPage,
  url,
}) => {
  return (
    <Fragment>
      <label className="filter-label">
        Species:
        <input
          type="text"
          placeholder="Choose species"
          id="name"
          className="filter-input"
          onInput={(e) => {
            setSpecies({ species: e.target.value });
            setCurrentPage(1);
          }}
        />
      </label>
      <label className="filter-label">
        Gender:
        <FilterGender
          setCurrentPage={setCurrentPage}
          setGender={setGender}
          url={url}
        />
      </label>
      <label className="filter-label">
        Status:
        <FilterStatus
          setCurrentPage={setCurrentPage}
          setStatus={setStatus}
          url={url}
        />
      </label>
    </Fragment>
  );
};
