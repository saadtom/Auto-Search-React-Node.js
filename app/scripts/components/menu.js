import React, { useState } from 'react';

const Menu = ({ getSearchData }) => {
    const [showingSearch, setShowingSearch] = useState(false);

    const onSearch = (e) => {
        if (e.target.value && e.target.value.length > 0) {
            fetch(`http://localhost:3035?searchKey=${e.target.value}`)
                .then(response => response.json())
                .then(data => {
                    getSearchData(data);
                })
                .catch(error => console.log(error));
        }

    }

    return (
        <header className="menu">
            <div className="menu-container">
                <div className="menu-holder">
                    <h1>ELC</h1>
                    <nav>
                        <a href="#" className="nav-item">HOLIDAY</a>
                        <a href="#" className="nav-item">WHAT'S NEW</a>
                        <a href="#" className="nav-item">PRODUCTS</a>
                        <a href="#" className="nav-item">BESTSELLERS</a>
                        <a href="#" className="nav-item">GOODBYES</a>
                        <a href="#" className="nav-item">STORES</a>
                        <a href="#" className="nav-item">INSPIRATION</a>

                        <a href="#" onClick={(e) => setShowingSearch(!showingSearch)}>
                            <i className="material-icons search">search</i>
                        </a>
                    </nav>
                </div>
            </div>
            <div className={(showingSearch ? "showing " : "") + "search-container"}>
                <input type="text" onChange={(e) => onSearch(e)} />
                <a href="#" onClick={(e) => setShowingSearch(!showingSearch)}>
                    <i className="material-icons close">close</i>
                </a>
            </div>
        </header>
    );
}

export default Menu;
