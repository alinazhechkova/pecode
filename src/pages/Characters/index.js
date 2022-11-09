import React, { useState, useEffect } from 'react'
import { CharacterList } from '../../components/characterPage/CharacterList'
import { Pagination } from '../../components/Pagination'
import { FilterCharacters } from '../../components/characterPage/FilterCharacters'

import parsingQuery from '../../utils/parsingQuery'

const Characters = () => {
    const [characters, setCharacters] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [pageNumber, setPageNumber] = useState(34)
    const [gender, setGender] = useState({})
    const [status, setStatus] = useState({})
    const [error, setError] = useState(null)
    const [species, setSpecies] = useState({})

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    let filters = Object.assign({ page: currentPage }, gender, status, species)

    const url = parsingQuery(
        filters,
        'https://rickandmortyapi.com/api/character/?'
    )

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then(
                (res) => {
                    if (!res.error) {
                        setLoading(true)
                        setPageNumber(res.info.pages)
                        setCharacters(res)
                    }
                },
                (error) => {
                    setLoading(true)
                    setError(error)
                }
            )
    }, [url, currentPage])

    if (error) {
        return <div>Error: {error.message}</div>
    } else if (!loading) {
        return <div>Loading...</div>
    } else {
        return (
            <div className="page__characters section">
                <div className="container">
                    <h1 className="text-primary">Characters</h1>
                    <FilterCharacters
                        setCurrentPage={setCurrentPage}
                        setGender={setGender}
                        setStatus={setStatus}
                        url={url}
                        setSpecies={setSpecies}
                    />
                    <CharacterList
                        characters={characters.results}
                        loading={loading}
                    />
                    <Pagination
                        currentPage={currentPage}
                        paginate={paginate}
                        url={url}
                        number={pageNumber}
                    />
                </div>
            </div>
        )
    }
}

export default Characters
