import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { EpisodeList } from '../../components/episodePage/EpisodeList';
import { Pagination } from '../../components/Pagination';
import { FilterEpisode } from '../../components/episodePage/FilterEpisode';

export const Episodes = () => {
    const [episodes, setEpisodes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageNumber, setPageNumber] = useState(34)
    const [name, setName] = useState({});
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }
    let filters = Object.assign({ page: currentPage }, name)
    const parsingQuery = () => {
        let addParams = [];
        for (let item in filters) {
            addParams.push(`${item}=${filters[item]}`)
        }
        return `https://rickandmortyapi.com/api/episode/?` + addParams.join('&');
    }
    let url = parsingQuery()
    useEffect(() => {
        const fetchCharacters = async () => {

            setLoading(true);
            const res = await axios.get(url);
            setPageNumber(res.data.info.pages);

            setEpisodes(res.data);
            setLoading(false);
        }
        fetchCharacters();
    }, [url, currentPage]);

    return (
        <div className="container mt-5">
            <h1 className="text-primary mb-3">Episodes</h1>
            <FilterEpisode setName={setName} setCurrentPage={setCurrentPage} />
            <EpisodeList episodes={episodes.results} loading={loading} />
            <Pagination currentPage={currentPage} paginate={paginate} url={url} number={pageNumber} />
        </div>
    )
}
