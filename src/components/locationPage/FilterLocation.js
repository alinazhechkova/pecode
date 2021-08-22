import React, { Fragment } from 'react';
import { FilterType } from './FilterType';
export const FilterLocation = ({ setDimension, setName, setCurrentPage, setType }) => {
    const handlerInput = (e) => {
        setName({ name: e.target.value });
        setCurrentPage(1);
    }
    const handlerDimension = (e) => {
        setDimension({ dimension: e.target.value });
        setCurrentPage(1);
    }
    return (
        <Fragment>
            <label className="filter-label">Name:<input type="text" className="filter-input" placeholder="Name" id="name" onInput={handlerInput} /></label>
            <label className="filter-label">Type:<FilterType setType={setType} setCurrentPage={setCurrentPage} /> </label>
            <label className="filter-label">Dimension:
                <input type="text" className="filter-input" placeholder="Dimension" id="dimension" onInput={handlerDimension} />
            </label>
        </Fragment>

    )
}
