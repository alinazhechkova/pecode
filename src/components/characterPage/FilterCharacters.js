import React from 'react'
import Input from '../UI/common/Input'
import Select from '../UI/common/Select'

const FilterCharacters = ({ filters, setFilters }) => (
    <>
        <Input
            value={filters.species}
            onChange={(e) => {
                setFilters({ ...filters, species: e.target.value })
            }}
            placeholder="Choose species"
            label="Species:"
        />
        <Select
            label="Gender:"
            placeholder="Choose gender"
            onChange={(e) => {
                setFilters({ ...filters, gender: e.target.value })
            }}
        />
        <Select
            label="Status:"
            placeholder="Choose status"
            onChange={(e) => {
                setFilters({ ...filters, status: e.target.value })
            }}
        />
    </>
)

export default FilterCharacters
