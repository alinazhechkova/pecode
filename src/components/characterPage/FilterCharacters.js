import React, { Fragment } from 'react'
import { FilterGender } from './filterGender'
import { FilterStatus } from './FilterStatus'

export const FilterCharacters = ({ filters, setFilters, url }) => {
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
                        setFilters({ ...filters, species: e.target.value })
                    }}
                />
            </label>
            <label className="filter-label">
                Gender:
                <FilterGender
                    status={filters.gender}
                    setGender={(gender) => setFilters({ ...filters, gender })}
                />
            </label>
            <label className="filter-label">
                Status:
                <FilterStatus
                    status={filters.status}
                    setStatus={(status) => setFilters({ ...filters, status })}
                />
            </label>
        </Fragment>
    )
}
