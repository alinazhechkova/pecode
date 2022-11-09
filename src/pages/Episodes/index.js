import React, { useState, useEffect, useMemo } from 'react'
import { EpisodeList } from '../../components/episodePage/EpisodeList'
import Pagination from '../../components/Pagination'

import parsingQuery from '../../utils/parsingQuery'
import api from '../../services'
import Input from '../../components/UI/common/Input'

const Episodes = () => {
    const [episodes, setEpisodes] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [page, setPage] = useState(1)

    const [filters, setFilters] = useState({
        name: '',
    })

    const url = useMemo(
        () => parsingQuery({ page, ...filters }, '/episode/?'),
        [filters, page]
    )

    const getEpisodes = () => {
        setIsLoading(true)

        api.get(url)
            .then((res) => {
                setIsLoading(false)
                setEpisodes(res.data)
            })
            .catch((error) => {
                setIsLoading(false)
                setError(error)
            })
    }

    useEffect(() => {
        if (!url) return

        getEpisodes()
    }, [url])

    if (error) {
        return <div>Error: {error.message}</div>
    } else if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div className="page__episodes section">
            <div className="container">
                <h1 className="text-primary">Episodes</h1>
                <Input
                    label="Name:"
                    value={filters.name}
                    onChange={(name) => setFilters({ name })}
                />
                {episodes.results?.length && (
                    <EpisodeList episodes={episodes.results} />
                )}
                <Pagination
                    currentPage={page}
                    paginate={setPage}
                    number={episodes.info?.pages || 1}
                />
            </div>
        </div>
    )
}

export default Episodes
