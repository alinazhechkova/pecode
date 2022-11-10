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
            options={DIMENSION_OPTIONS}
        />
        <Select
            label="Type:"
            placeholder="Choose type:"
            onChange={(e) => setFilters({ ...filters, type: e.target.value })}
            options={LOCATION_TYPE}
        />
    </>
)

export default FilterLocation
