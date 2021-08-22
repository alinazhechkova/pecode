import React, { useState, Fragment } from 'react';
import './style.scss';
export const Pagination = ({ paginate, number, currentPage }) => {
    const pageNumber = [];
    const [pageNumberLimit, setPageNumberLimit] = useState(10)
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(10)
    const [minPageNumberLimit, setMinPageNumberLimit] = useState(0)

    for (let i = 1; i <= number; i++) {
        pageNumber.push(i)
    }

    const handleNextBtn = (e) => {
        e.preventDefault()
        paginate(currentPage + 1);
        if (currentPage === pageNumber.length) {
            paginate(1);
            setMinPageNumberLimit(0);
            setMaxPageNumberLimit(10)
        }
        if (currentPage + 1 > maxPageNumberLimit) {
            setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
            setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit)
        }
    }
    const handlePrevBtn = (e) => {
        e.preventDefault()
        paginate(currentPage - 1);
        if (currentPage === pageNumber[0]) {
            paginate(1);
            return;
        };
        if ((currentPage - 1) % pageNumberLimit === 0) {
            setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
            setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit)
        }
    }

    const prev = () => {
        if (currentPage > pageNumberLimit) {
            return (<Fragment><li className="page-item"><a href="!#" onClick={handlePrevBtn} className="page-link">Prev</a></li>
                <li className="page-item"><a href="!#" onClick={handlePrevBtn} className="page-link">...</a></li>
            </Fragment>)
        } else {
            return (<li className="page-item"><a href="!#" onClick={handlePrevBtn} className="page-link">Prev</a></li>)
        }
    };
    const prevBtn = prev()

    return (
        <nav aria-label="Page navigation" className="character__navigation">
            <ul className="pagination">
                {prevBtn}
                {pageNumber.map(number => {
                    if (number > minPageNumberLimit && number < maxPageNumberLimit + 1) {
                        return (<li key={number} className="page-item" >
                            <a onClick={(e) => {
                                e.preventDefault();
                                paginate(number);
                            }} href={`!#`} className={
                                (currentPage === number) ? 'page-link active' : 'page-link'
                            } >
                                {number}
                            </a>
                        </li>)
                    }
                })}
                <li className="page-item"><a href="!#" onClick={handleNextBtn} className="page-link">Next</a></li>
            </ul>
        </nav>
    )
}
