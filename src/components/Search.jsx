import React from 'react';
import "./Search.css";

function Search({ search, setSearch }) {
    return (
        <div className="Search">
            <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="search">Search Files</label>
                <input
                    id="search"
                    type="text"
                    placeholder="Search Files"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </form>
        </div>
    )
}

export default Search;
