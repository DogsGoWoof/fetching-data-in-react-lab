const BASE_URL = 'https://swapi.dev/api/';

const search = async (infoType) => {
    try {
        const queryString = BASE_URL + infoType;
        const res = await fetch(queryString);
        console.log(queryString);
        const data = await res.json();
        // console.log('Data:', data);
        return data;
    } catch (err) {
        console.log(err);
    }
};

// search('starships');

export { search };