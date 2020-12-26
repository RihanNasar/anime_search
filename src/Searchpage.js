import React,{useEffect, useState} from 'react'
import './Searchpage.css'
import {Link} from 'react-router-dom'
function Searchpage({match}) {
    
    const [anime , setAnime] = useState([])
    useEffect(() => {
        GetAnime()
        
    },[anime])
    function GetAnime(){
        fetch(`https://api.jikan.moe/v3/search/anime?q=${match.params.id}&page=1&genre=12&genre_exclude=0`)
        .then(res => res.json())
        .then(data => {
            setAnime(data.results)
            }
            )
    }
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
        <div key={Math.random() * 1999299} className="search_row">
            
            {anime.map(each_anime => (
              
                <Link to={`/anime/${each_anime.mal_id}`}><div key={each_anime.mal_id} className="search_rows">
                
                    <div className="search_row_upper">
                        <img src={each_anime.image_url} alt={each_anime.title}/>
                    </div>
                    <div className="search_row_lower">
                        <h5>{each_anime.title}</h5>
                        <h4 className={`tag ${setVoteClass(each_anime.score)}`}>{each_anime.score}</h4>
                    </div>
                </div></Link>
        
            ))}
        </div>
    )
}

export default Searchpage
