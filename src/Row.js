import React,{ useState, useEffect } from 'react'
import './App.css'
import {Link} from 'react-router-dom'
import instance from './axios.js'

function Row({title, fetchUrl}) {
    const [animes, setAnimes] = useState([])
    console.log(animes);
    useEffect(() => {
      instance.get(fetchUrl)
        .then( res => res.data )
        .then( data => data.anime)
        .then(ani => setAnimes(ani.slice(0,5)))
        
    },[fetchUrl])
    const setVoteClass = (vote) => {
        if (vote >= 8) {
          return "green";
        } else if (vote >= 6) {
          return "orange";
        } else {
          return "red";
        }
      };

    return (
        <div className="row_container">

            <h2>{title}</h2>
            <div className="row">
             {animes.map((anime) =>(
              
              <Link to={`/anime/${anime.mal_id}`}>
                <div className="rows">
                
                    <div className="row_upper">
                        <img src={anime.image_url} alt={anime.title}/>
                    </div>
                    <div className="row_lower">
                        <h5>{anime.title}</h5>
                        <h4 className={`tag ${setVoteClass(anime.score)}`}>{anime.score}</h4>
                    </div>
                </div>
              </Link>
             ))}; 
            </div>
           
            

            
    
        </div>
    )
}

export default Row
