import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LocationsList } from '../../components/locationPage/LocationsList';
import { Pagination } from '../../components/Pagination';
import { FilterLocation } from '../../components/locationPage/FilterLocation';

export const Locations = () => {
    const [locations, setLocations] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageNumber, setPageNumber] = useState(34)
    const [name, setName] = useState({});
    const [type, setType] = useState({});
    const [dimension, setDimension] = useState({});
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }
    let filters = Object.assign({ page: currentPage }, name, dimension, type)
    const parsingQuery = () => {
        let addParams = [];
        for (let item in filters) {
            addParams.push(`${item}=${filters[item]}`)
        }
        return `https://rickandmortyapi.com/api/location/?` + addParams.join('&');
    }
    let url = parsingQuery()
    useEffect(() => {
        const fetchCharacters = async () => {

            setLoading(true);
            const res = await axios.get(url);
            setPageNumber(res.data.info.pages);
            console.log(res.data)
            setLocations(res.data);
            setLoading(false);
        }
        fetchCharacters();
    }, [url, currentPage]);

    return (
        <div className="container mt-5">
            <h1 className="text-primary mb-3">Locations:</h1>
            <FilterLocation setName={setName} setDimension={setDimension} setCurrentPage={setCurrentPage} setType={setType} />
            <LocationsList locations={locations.results} loading={loading} />
            <Pagination currentPage={currentPage} paginate={paginate} url={url} number={pageNumber} />
        </div>
    )
}
