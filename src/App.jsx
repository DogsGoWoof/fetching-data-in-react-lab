// src/App.jsx

import { useState } from 'react';
import * as starshipService from './services/starshipService';
import Search from './components/Search/Search';
import InfoCard from './components/InfoCard/InfoCard';

import './App.css';

const App = () => {

  // const [starship, setStarship] = useState({});
  const [queriedInfo, setQueriedInfo] = useState([]);
  const [infoType, setInfoType] = useState('');

  const fetchData = async (infoType='starships') => {
    const data = await starshipService.search(infoType);
    console.log('Data: ', data);
    const queryResults = [data];
    console.log('queryResults: ', queryResults);
    setQueriedInfo(queryResults);
    // const newStarshipState = {
    //   name: data.name,
    //   starship_class: data.starship_class,
    //   manufacturer: data.manufacturer,
    //   model: data.model,
    // };
    // setStarship(newStarshipState);
  };

  // fetchData();

  return (
    <>
      <h1>Star Wars</h1>
      <h2>These are the {infoType ? infoType : "droids"} you're looking for</h2>
      <Search infoType={infoType} setInfoType={setInfoType} fetchData={fetchData}/>
      <InfoCard queriedInfo={queriedInfo} />
    </>
  );
}

export default App
