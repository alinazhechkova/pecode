import React from 'react';
export const FilterStatus = ({ setStatus, status, setCurrentPage, url }) => {
    const handleChange = (e) => {
        setStatus({ status: e.target.value });
        setCurrentPage(1)
    };
    return (
        <select value={status} onChange={handleChange}>
            <option defaultValue value="">Choose status</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
        </select>
    )
}
