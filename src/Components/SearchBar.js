import React from 'react'

function SearchBar() {

    return (
        <div className="container p-5">
            {/* Sorting Options */}
            <div className="row justify-content-center mt-4">
                <div id="sortingOptions" className="col-md-6 d-flex justify-content-around">
                    <h2>Best Match</h2>
                    <h2>Highest Rated</h2>
                    <h2>Most Reviewed</h2>
                </div>
            </div>
            {/* Underline below sorting options */}
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <hr style={{ borderTop: '5px solid #000' }} />
                </div>
            </div>

            {/* Search Inputs */}
            <div id='searchOptions' className="my-3">
                <div className="row">
                    <div className="col">
                        <input id='userTerms' className="form-control" placeholder="User Terms"></input>
                    </div>
                    <div className="col">
                        <input id='location' className="form-control" placeholder="Location"></input>
                    </div>
                </div>
            </div>

            {/* Search Button */}
            <div className="row justify-content-center mt-4">
                <div className="col-md-6 d-flex justify-content-center">
                    <button id="searchButton" className="btn btn-primary">Search</button>
                </div>
            </div>
        </div>
    )
}


export default SearchBar;