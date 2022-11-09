import React, { useState, useEffect, useMemo } from 'react'
import CharacterList from '../../components/characterPage/CharacterList'
import Pagination from '../../components/Pagination'
import FilterCharacters from '../../components/characterPage/FilterCharacters'

import parsingQuery from '../../utils/parsingQuery'
import api from '../../services'

const Characters = () => {
    const [characters, setCharacters] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [page, setPage] = useState(1)

    const [filters, setFilters] = useState({
        gender: '',
        status: '',
    })

    const url = useMemo(
        () => parsingQuery({ page, ...filters }, '/character/?'),
        [filters, page]
    )

    const getCharacters = () => {
        setIsLoading(true)

        api.get(url)
            .then((res) => {
                setIsLoading(false)
                setCharacters(res.data)
            })
            .catch((err) => {
                setError(err)
                setIsLoading(false)
            })
    }

    useEffect(() => {
        if (!url) return

        getCharacters()
    }, [url])

    if (error) {
        return <div>Error: {error.message}</div>
    } else if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div className="page__characters section">
            <div className="container">
                <h1 className="text-primary">Characters</h1>
                <FilterCharacters
                    filters={filters}
                    setFilters={(filters) => {
                        setFilters(filters)
                        setPage(1)
                    }}
                />
                {characters.results?.length && (
                    <CharacterList characters={characters.results} />
                )}
                <Pagination
                    currentPage={page}
                    paginate={setPage}
                    number={characters?.info?.pages || 1}
                />
            </div>
        </div>
    )
}

export default Characters
