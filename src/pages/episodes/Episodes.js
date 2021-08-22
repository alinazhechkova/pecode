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
    const [error, setError] = useState(null);
    const [episode, setEpisode] = useState('')
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }
    let filters = Object.assign({ page: currentPage }, name)
    const parsingQuery = () => {
        let addParams = [];
        for (let item in filters) {
            addParams.push(`${item}=${filters[item]}`)
        }

        return `https://rickandmortyapi.com/api/episode//?` + addParams.join('&');
    }
    let url = parsingQuery()
    useEffect(() => {
        fetch(url).then(res => res.json()).then((res) => {
            if (!res.error) {
                setLoading(true);
                setPageNumber(res.info.pages);
                setEpisodes(res);
            }
        }, (error) => {
            setLoading(true);
            setError(error)
        })
    }, [url, currentPage]);

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!loading) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className="page__episodes section">
                <div className="container">
                    <h1 className="text-primary">Episodes</h1>
                    <FilterEpisode episode={episode} setEpisode={setEpisode} setName={setName} setCurrentPage={setCurrentPage} />
                    <EpisodeList episodes={episodes.results} loading={loading} />
                    <Pagination currentPage={currentPage} paginate={paginate} url={url} number={pageNumber} />
                </div>
            </div>

        );
    }

}
