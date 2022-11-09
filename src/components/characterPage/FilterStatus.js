import React from 'react'

export const FilterStatus = ({ setStatus, status, setCurrentPage }) => {
    const handleChange = (e) => {
        setStatus(e.target.value)
    }

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
    )
}
