import { useState } from 'react';

const Search = ({ infoType, setInfoType, fetchData }) => {

    const [dataTypes, setDataTypes] = useState([
        'films',
        'people',
        'planets',
        'species',
        'starships',
        'vehicles'
    ]);

    const handleSubmit = (e) => {
        e.preventDefault();
        infoType ? fetchData(infoType) : fetchData('films');
    };

    return (
        <section>
            <h2>Search</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="infoType">Choose Info Type:</label>
                <select name="infoType" id="infoType" onChange={(event) => { setInfoType(event.target.value) }}>
                    {
                        dataTypes.map((type, index) => (
                            <option key={index} value={type}>{type}</option>
                        ))
                    }
                </select>
                <button type="submit">Search</button>
            </form>
        </section>
    );
};

export default Search;