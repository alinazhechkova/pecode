import React, { Fragment } from 'react';

export const FilterEpisode = ({ setName, setCurrentPage }) => {
    return (
        <Fragment>
            <input type="text" placeholder="Episode name" id="name" onInput={(e) => {
                setName({ name: e.target.value });
                setCurrentPage(1)
            }} />
        </Fragment>

    )
}
