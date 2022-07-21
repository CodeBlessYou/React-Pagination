import React from "react";

import "./Pagination.css";

const Pagination = ({
    totalPosts,
    postPerPage,
    currentPage,
    setCurrentPage,
}) => {
    let pages = [];

    for (let i = 1; i <= totalPosts / postPerPage; i++) {
        pages.push(i);
    }

    const handleClick = (page) => {
        setCurrentPage(page);
    };
    return (
        <div className='pagination'>
            {pages.map((page, index) => {
                return (
                    <button
                        key={index}
                        className={page == currentPage ? "active" : ""}
                        onClick={() => handleClick(page)}>
                        {page}
                    </button>
                );
            })}
        </div>
    );
};

export default Pagination;
