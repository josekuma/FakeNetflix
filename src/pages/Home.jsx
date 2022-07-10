import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'

const Home = () =>{
    return (
        <>    <Main/>
        <Row rowId="1" title='Popular' fetchURL={requests.requestPopular}/>
        <Row rowId="2" title='Top Rated' fetchURL={requests.requestTopRated}/>
        <Row rowId="3" title='Up Coming' fetchURL={requests.requestUpComing}/>
   
        </>
     
    )
}

export default Home;