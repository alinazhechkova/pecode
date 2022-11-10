import React from 'react'

const AddWatchItem = ({ setStatus, setInputText, inputText, addItem }) => {
    const handlerSubmit = (e) => {
        e.preventDefault()
        if (!inputText.trim()) return

        const newItem = {
            episodeName: inputText,
            completed: false,
            id: Math.random() * 1000,
        }

        addItem(newItem)
        setInputText('')
    }

    const onChange = (e) => {
        setInputText(e.target.value)
    }

    const onStatusChange = (e) => {
        setStatus(e.target.value)
    }

    return (
        <>
            <form onSubmit={handlerSubmit} className="watch__form form">
                <div className="form__input-group">
                    <input
                        value={inputText}
                        type="text"
                        onChange={onChange}
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
                <div
                    className="form__select filter-select"
                    onChange={onStatusChange}
                >
                    <select name="watch" id="filterWatch">
                        <option value="all">All</option>
                        <option value="watched">Watched</option>
                        <option value="unwatched">Unwatched</option>
                    </select>
                </div>
            </form>
        </>
    )
}

export default AddWatchItem
