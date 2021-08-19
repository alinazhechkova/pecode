import React from 'react';
export const FilterType = ({ setType, setCurrentPage }) => {
    const handleChange = (e) => {
        setType({ type: e.target.value });
        setCurrentPage(1);
    };
    return (
        <select onChange={handleChange}>
            <option defaultValue value="">Choose type:</option>
            <option value="planet">Planet</option>
            <option value="cluster">Cluster</option>
            <option value="space station">Space station</option>
            <option value="microverse">Microverse</option>
            <option value="tv">TV</option>
            <option value="dream">Dream</option>
            <option value="dimension">Dimension</option>
            <option value="menagerie">Menagerie</option>
            <option value="customs">Customs</option>
            <option value="game">Game</option>
            <option value="unknown">unknown</option>
        </select>
    )
}
