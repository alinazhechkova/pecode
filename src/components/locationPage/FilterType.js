import React from 'react'

export const FilterType = ({ setType, setCurrentPage }) => {
    const handleChange = (e) => {
        setType({ type: e.target.value })
        setCurrentPage(1)
    }

    const locations = [
        'Planet',
        'Cluster',
        'Space station',
        'Microverse',
        'TV',
        'Dream',
        'Dimension',
        'Menagerie',
        'Customs',
        'Game',
        'unknown',
    ]

    return (
        <div className="filter-select" onChange={handleChange}>
            <select>
                <option defaultValue value="">
                    Choose type:
                </option>
                {locations.map((location) => (
                    <option value={location} key={location}>
                        {location}
                    </option>
                ))}
            </select>
        </div>
    )
}
