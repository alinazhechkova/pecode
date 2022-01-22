import React from "react";

export const AddWatchItem = ({
  setStatus,
  setInputText,
  inputText,
  setList,
  list,
}) => {
  const handlerSubmit = (e) => {
    e.preventDefault();
    if (!inputText) return;
    setList([
      ...list,
      { episodeName: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };

  const handlerInput = (e) => {
    setInputText(e.target.value);
  };

  const changeHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <>
      <form onSubmit={handlerSubmit} className="watch__form form">
        <div className="form__input-group">
          <input
            value={inputText}
            type="text"
            onChange={handlerInput}
            id="episodeName"
            className="form__input"
            placeholder="Enter the episode name"
            aria-label="Enter the episode name"
          />
          <button
            className="btn btn-outline-primary form__add-btn"
            type="submit"
          >
            Add
          </button>
        </div>
        <div className="form__select filter-select" onChange={changeHandler}>
          <select name="watch" id="filterWatch">
            <option value="all">All</option>
            <option value="watched">Watched</option>
            <option value="unwatched">Unwatched</option>
          </select>
        </div>
      </form>
    </>
  );
};
