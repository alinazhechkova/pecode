import React, { Fragment } from 'react';

export const FilterEpisode = ({ episode, setEpisode, setName, setCurrentPage }) => {

    return (
        <label className="filter-label">Name:
            <input type="text" className="filter-input" placeholder="Episode name" id="name" onInput={(e) => {
                setName({ name: e.target.value });
                setCurrentPage(1)
            }} />
        </label>


    )
}
