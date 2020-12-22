import React from 'react'
import Row from './Row'
import './App.css';
import uuid from 'react-uuid'
import requests from './requests'
function Mainpage() {
    return (
        <div>
            
            <Row key={uuid()} title="Shounen" fetchUrl={requests.Shounen}/>
            <Row key={uuid()} title="Adventure" fetchUrl={requests.Adventure}/>
            <Row key={uuid()} title="Sports" fetchUrl={requests.Sports}/>
            <Row key={uuid()} title="Romance" fetchUrl={requests.Romance}/>
            <Row key={uuid()} title="Psychological" fetchUrl={requests.Psychological}/>
            <Row key={uuid()} title="Shoujo" fetchUrl={requests.Shoujo}/>
            <Row key={uuid()} title="Thriller" fetchUrl={requests.Thriller}/>
            
    
      
        </div>
    )
}

export default Mainpage
