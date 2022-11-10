import React, { useState } from 'react'
import './style.scss'

const PAGE_NUMBER_LIMIT = 10

const Pagination = ({ paginate, number, currentPage }) => {
    const pageNumber = []
    const [maxPageNumberLimit, setMaxPageNumberLimit] =
        useState(PAGE_NUMBER_LIMIT)

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

    return (
        <nav aria-label="Page navigation" className="character__navigation">
            <ul className="pagination">
                <li className="page-item">
                    <a href="!#" onClick={handlePrevBtn} className="page-link">
                        Prev
                    </a>
                </li>
                {currentPage > PAGE_NUMBER_LIMIT && (
                    <li className="page-item">
                        <a
                            href="!#"
                            onClick={handlePrevBtn}
                            className="page-link"
                        >
                            ...
                        </a>
                    </li>
                )}
                {pageNumber.map((number) => {
                    if (
                        number > minPageNumberLimit &&
                        number < maxPageNumberLimit + 1
                    ) {
                        return (
                            <li key={number} className="page-item">
                                <button
                                    onClick={(e) => {
                                        e.preventDefault()
                                        paginate(number)
                                    }}
                                    className={
                                        currentPage === number
                                            ? 'page-link active'
                                            : 'page-link'
                                    }
                                >
                                    {number}
                                </button>
                            </li>
                        )
                    }

                    return null
                })}
                <li className="page-item">
                    <button onClick={handleNextBtn} className="page-link">
                        Next
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination
