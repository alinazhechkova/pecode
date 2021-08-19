import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CharacterList } from '../../components/characterPage/CharacterList';
import { Pagination } from '../../components/Pagination';
import { FilterCharacters } from '../../components/characterPage/FilterCharacters';

export const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageNumber, setPageNumber] = useState(34)
    const [gender, setGender] = useState({});
    const [status, setStatus] = useState({});
    const [species, setSpecies] = useState({});
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }
    let filters = Object.assign({ page: currentPage }, gender, status, species)
    const parsingQuery = () => {
        let addParams = [];
        for (let item in filters) {
            addParams.push(`${item}=${filters[item]}`)
        }
        return `https://rickandmortyapi.com/api/character/?` + addParams.join('&');
    }
    let url = parsingQuery()
    useEffect(() => {
        const fetchCharacters = async () => {

            setLoading(true);
            const res = await axios.get(url);
            setPageNumber(res.data.info.pages);

            setCharacters(res.data);
            setLoading(false);
        }
        fetchCharacters();
    }, [url, currentPage]);

    return (
        <div className="container mt-5">
            <h1 className="text-primary mb-3">Characters</h1>
            <FilterCharacters setCurrentPage={setCurrentPage} setGender={setGender} setStatus={setStatus} url={url} setSpecies={setSpecies} />
            <CharacterList characters={characters.results} loading={loading} />
            <Pagination currentPage={currentPage} paginate={paginate} url={url} number={pageNumber} />
        </div>
    )
}
