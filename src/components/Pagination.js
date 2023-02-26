import React from "react";

import "./Pagination.css";

const Pagination = ({
    totalPosts,
    postsPerPage,
    setCurrentPage,
    currentPage,
}) => {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i);
    }

    return (
        <div className='pagination'>
            <button className='navbtn' onClick={()=> { setCurrentPage(pages[0])}} >First</button>
            <button className="navbtn" onClick={()=> {setCurrentPage(currentPage===1?currentPage:currentPage-1)}} >Prev</button>
            {pages.map((page, index) => {
                return (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(page)}
                        className={page == currentPage ? "active" : ""}>
                        {page}
                    </button>
                );
            })}
            <button className="navbtn" onClick={()=> {setCurrentPage(currentPage===pages.length?currentPage:currentPage+1)}} >Next</button>
            <button className="navbtn" onClick={()=> { setCurrentPage(pages.length)}}  >Last</button>
        </div>
    );
};

export default Pagination;
