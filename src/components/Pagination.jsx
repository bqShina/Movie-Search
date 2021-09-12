import React from 'react'

export const Pagination = ({moviesPerPage, totalMovies}) => {
    const pagesNumbers = [];

    for (let i = 0; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
        pagesNumbers.push(i);
    }
    return (
        <nav>
            <ul className="pagination">
                {pagesNumbers.map((number) => (
                    <li key={number} className="page-item">
                        <a href="!#" className="page-link">{number}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
