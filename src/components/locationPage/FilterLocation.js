import React from 'react'
import { DIMENSION_OPTIONS, LOCATION_TYPE } from '../../constants'

import Input from '../UI/common/Input'
import Select from '../UI/common/Select'

const FilterLocation = ({ filters, setFilters }) => (
    <>
        <Input
            label="Name:"
            onChange={(e) => setFilters({ ...filters, name: e.target.value })}
            placeholder="Name"
        />
        <Select
            label="Dimension:"
            placeholder="Dimension"
            onChange={(e) =>
                setFilters({ ...filters, dimension: e.target.value })
            }
        >
            {DIMENSION_OPTIONS.map((dimension) => (
                <option value={dimension} key={dimension}>
                    {dimension}
                </option>
            ))}
        </Select>
        <Select
            label="Type:"
            placeholder="Choose type:"
            onChange={(e) => setFilters({ ...filters, type: e.target.value })}
        >
            {LOCATION_TYPE.map((location) => (
                <option value={location} key={location}>
                    {location}
                </option>
            ))}
        </Select>
    </>
)

export default FilterLocation
