import React, { useState, useEffect } from 'react';
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
    const [error, setError] = useState(null)
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
    let url = parsingQuery();
    useEffect(() => {
        fetch(url).then(res => res.json()).then((res) => {
            setLoading(true);
            setPageNumber(res.info.pages);
            setLocations(res);
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
            <section className="page__locations section">
                <div className="container">
                    <h1 className="text-primary">Locations:</h1>
                    <FilterLocation setName={setName} setDimension={setDimension} setCurrentPage={setCurrentPage} setType={setType} />
                    <LocationsList locations={locations.results} loading={loading} />
                    <Pagination currentPage={currentPage} paginate={paginate} url={url} number={pageNumber} />
                </div>
            </section>

        );
    }

}
