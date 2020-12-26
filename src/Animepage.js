import React, {useState,useEffect} from 'react'
import ReactPlayer from 'react-player/youtube'
import './Animepage.css'
function Animepage({match}) {
    const [anime, setAnime] = useState({
        genres: []
    })
    useEffect(() => {
        fetch(`https://api.jikan.moe/v3/anime/${match.params.id}`)
        .then( res => res.json())
        .then(data => setAnime(data))
    },[])
    return (
        <div className="anime_main">
            <h3>{anime.title}</h3>
            <div className="upper">
                <img className="anime_img" src={anime.image_url} alt={anime.title}/>
                
            </div>
            <div className="genres">
                <div className="genre">
                    genre :-
                    {anime.genres.map(genre => (
                        <span>{genre.name}, </span>
                    ))}
                </div>
                <p>{anime.synopsis}</p>
            </div>
            
            
            
            <ReactPlayer className="video" 
            url={anime.trailer_url}
            controls
            width = "504px"
            height = "304px"/>
            <span className="anime_rating">{anime.rating}</span>
        </div>
    )
}

export default Animepage
