import React, { useState, useEffect } from 'react'
import LocationsList from '../../components/locationPage/LocationsList'
import Pagination from '../../components/Pagination'
import FilterLocation from '../../components/locationPage/FilterLocation'

import parsingQuery from '../../utils/parsingQuery'
import api from '../../services'

const Locations = () => {
    const [locations, setLocations] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [error, setError] = useState(null)

    const [filters, setFilters] = useState({
        name: '',
        dimension: '',
        type: '',
    })

    const url = parsingQuery({ page, ...filters }, '/location/?')

    const getLocations = () => {
        setIsLoading(true)

        api.get(url)
            .then((res) => {
                setIsLoading(false)
                setLocations(res.data)
            })
            .catch((error) => {
                setIsLoading(false)
                setError(error)
            })
    }

    useEffect(() => {
        if (!url) return

        getLocations()
    }, [url])

    if (error) {
        return <div>Error: {error.message}</div>
    } else if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <section className="page__locations section">
            <div className="container">
                <h1 className="text-primary">Locations:</h1>
                <FilterLocation
                    filters={filters}
                    setFilters={(newFilters) => {
                        setFilters(newFilters)
                        setPage(1)
                    }}
                />
                {locations.results?.length && (
                    <LocationsList locations={locations.results} />
                )}
                <Pagination
                    currentPage={page}
                    paginate={setPage}
                    number={locations.info?.pages || 1}
                />
            </div>
        </section>
    )
}

export default Locations
