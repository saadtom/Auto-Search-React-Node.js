import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Menu from './components/menu';
import Home from './components/home';

const App = () => {
    const [searchData, setSearchData] = useState([]);

    const handleChange = (data) => {
        setSearchData(data);
    }

    return (
        <div className="App">
            <Menu getSearchData={handleChange} />
            <Home searchData={searchData} />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));

