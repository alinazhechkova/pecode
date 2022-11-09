import React from 'react'

export const FilterGender = ({ setGender }) => {
    const handleChange = (e) => {
        setGender(e.target.value)
    }

    return (
        <div className="filter-select" onChange={handleChange}>
            <select>
                <option defaultValue value="">
                    Choose gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="genderless">Genderless</option>
                <option value="unknown">Unknown</option>
            </select>
        </div>
    )
}
