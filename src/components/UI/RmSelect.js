import React, { Fragment } from 'react';
import { RmOption } from './RmOption';
export const RmSelect = ({ handler, options, id }) => {
    const handleChange = (e) => {
        handler(e)
    };
    return (
        <Fragment>
            <label className="filter-label" htmlFor={id}>{id}</label>
            <div className="filter-select" id={id} onChange={handleChange}>
                <select>
                    {options.map(option => {
                        <RmOption option={option} key={Math.random()} />
                    })}
                </select>
            </div >
        </Fragment>
    )
}
