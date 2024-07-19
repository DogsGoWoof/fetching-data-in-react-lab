const InfoCard = ({ queriedInfo }) => {

    const objectToList = (object) => {
        Object.entries(object);
    };

    console.log('queriedInfo', queriedInfo);
    const [querIn] = queriedInfo;
    querIn ? console.log('querIn', querIn.results) : '';
    let resultArr = querIn ? querIn.results : '';
    console.log(resultArr);
    
    const obEn = querIn ? Object.entries(querIn) : null;
        // converts object to array that holds key-value pairs in their own arrays nested within
    console.log('onEn', obEn);


    // console.log('Object.entries(queriedInfo): ', Object.entries(queriedInfo));
    // console.log('queriedInfo: ', queriedInfo);
    // console.log('obtolist', objectToList(queriedInfo));

    return (
        <>
         <hr />
            <ol>
                {
                    // queriedInfo.map((info, index) => (
                    //     <li key={index}>
                    //         {console.log('info', info)}
                    //         {info.count}
                    //     </li>
                    // ))
                    resultArr ? 
                    (resultArr.map((result, index) => (
                        // <li key={index}>{JSON.stringify(result)}</li>
                        <li key={index}>{result.title ? result.title : result.name}</li>
                    )))
                    : <li key='undefined'></li>
                }
            </ol>
        </>
    );
}

export default InfoCard;