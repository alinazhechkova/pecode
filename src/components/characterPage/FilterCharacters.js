import React from 'react'
import { GENDER_TYPE, STATUS_TYPE } from '../../constants'
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
            options={GENDER_TYPE}
            onChange={(e) => {
                setFilters({ ...filters, gender: e.target.value })
            }}
        />
        <Select
            label="Status:"
            options={STATUS_TYPE}
            placeholder="Choose status"
            onChange={(e) => {
                setFilters({ ...filters, status: e.target.value })
            }}
        />
    </>
)

export default FilterCharacters
