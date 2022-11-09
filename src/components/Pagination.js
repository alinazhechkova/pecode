import React, { useState, Fragment } from 'react'
import './style.scss'

const PAGE_NUMBER_LIMIT = 10
export const Pagination = ({ paginate, number, currentPage }) => {
    const pageNumber = []
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(10)
    const [minPageNumberLimit, setMinPageNumberLimit] = useState(0)

    for (let i = 1; i <= number; i++) {
        pageNumber.push(i)
    }

    const handleNextBtn = (e) => {
        e.preventDefault()
        paginate(currentPage + 1)
        if (currentPage === pageNumber.length) {
            paginate(1)
            setMinPageNumberLimit(0)
            setMaxPageNumberLimit(10)
        }
        if (currentPage + 1 > maxPageNumberLimit) {
            setMaxPageNumberLimit(maxPageNumberLimit + PAGE_NUMBER_LIMIT)
            setMinPageNumberLimit(minPageNumberLimit + PAGE_NUMBER_LIMIT)
        }
    }
    const handlePrevBtn = (e) => {
        e.preventDefault()
        paginate(currentPage - 1)
        if (currentPage === pageNumber[0]) {
            paginate(1)
            return
        }
        if ((currentPage - 1) % PAGE_NUMBER_LIMIT === 0) {
            setMinPageNumberLimit(minPageNumberLimit - PAGE_NUMBER_LIMIT)
            setMaxPageNumberLimit(maxPageNumberLimit - PAGE_NUMBER_LIMIT)
        }
    }

    const prev = () => {
        if (currentPage > PAGE_NUMBER_LIMIT) {
            return (
                <Fragment>
                    <li className="page-item">
                        <a
                            href="!#"
                            onClick={handlePrevBtn}
                            className="page-link"
                        >
                            Prev
                        </a>
                    </li>
                    <li className="page-item">
                        <a
                            href="!#"
                            onClick={handlePrevBtn}
                            className="page-link"
                        >
                            ...
                        </a>
                    </li>
                </Fragment>
            )
        } else {
            return (
                <li className="page-item">
                    <a href="!#" onClick={handlePrevBtn} className="page-link">
                        Prev
                    </a>
                </li>
            )
        }
    }
    const prevBtn = prev()

    return (
        <nav aria-label="Page navigation" className="character__navigation">
            <ul className="pagination">
                {prevBtn}
                {pageNumber.map((number) => {
                    if (
                        number > minPageNumberLimit &&
                        number < maxPageNumberLimit + 1
                    ) {
                        return (
                            <li key={number} className="page-item">
                                <a
                                    onClick={(e) => {
                                        e.preventDefault()
                                        paginate(number)
                                    }}
                                    href={`!#`}
                                    className={
                                        currentPage === number
                                            ? 'page-link active'
                                            : 'page-link'
                                    }
                                >
                                    {number}
                                </a>
                            </li>
                        )
                    }
                })}
                <li className="page-item">
                    <a href="!#" onClick={handleNextBtn} className="page-link">
                        Next
                    </a>
                </li>
            </ul>
        </nav>
    )
}
