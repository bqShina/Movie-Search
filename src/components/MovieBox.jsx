import { faCheckCircle, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState, useEffect } from 'react';
import { GlobalContext } from './context/GlobalState';

const imageAPI = "https://image.tmdb.org/t/p/w500";
const imdbEnd = "https://www.imdb.com/title/";

const apiKey = "1e448e0dfcdbb565f5d329820065b4d2";

const detailAPI = "https://api.themoviedb.org/3/movie/";

export const MovieBox = ({title, poster_path, overview, vote_average, id}) => {
    const maxText = 150;
    const [watched, setWatched] = useState(false);
    const [imdb, setImdb] = useState(0);
    const { markMovieWatch, watchedList } = useContext(GlobalContext);

    // let storedMovieId = watchedList.find(movieId => movieId === id);
    useEffect(() => {
        // console.log(typeof watchedList);
        
        watchedList.includes(id)? setWatched(true) : setWatched(false);
    }, [])
    
    // Get Imdb ID
    useEffect(() => {
        getImdb(id);
    }, [imdb])


    // Get Movies imdb ID


    const getImdb = (id) => {
        fetch(`${detailAPI}${id}?api_key=${apiKey}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setImdb(data.imdb_id);                        
        })
        // console.log(imdb);
    }

    const handleMark = () => {
        setWatched(true);      
    }

    // const setLocal = () => {
    //     localStorage.setItem('ids', ids);
    // }

    return (
        <div>
            <div className="movie-box">
            <div className="listing-image">
                <a href={imdbEnd + imdb} title={title} target="_blank" rel="noopener noreferrer">
                    <img src={poster_path? (imageAPI + poster_path): 'https://images.unsplash.com/photo-1560109947-543149eceb16?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80'} alt={title} />
                </a>
            </div>
            <div className="listing-content">
                <a href={imdbEnd + imdb} title={title} className="title-link" target="_blank" rel="noopener noreferrer">
                    <h2 className="movie-title">{title}</h2>
                </a>
                <div className="rating">
                    <FontAwesomeIcon icon={faStar} color="#ffc741" />
                    <span>{vote_average} / 10</span>
                    <div className="mark-watch" >
                        <button type="button" id={id} onClick={() => {
                            markMovieWatch(id);
                            handleMark();
                        }} style={watched? {visibility: "hidden"} : {visibility: "visible"}}>Watched?</button>
                        <span style={watched? {opacity : '1'} : {opacity : "0"}}>
                            <FontAwesomeIcon icon={faCheckCircle} size="lg" color="#9352b3"/>
                        </span>
                    </div>

                    
                </div>
                <p>{overview.length > maxText ? `${overview.substring(0, maxText)}...` : overview}</p>
                <a href={imdbEnd + imdb} className="btn" title={title} target="_blank" rel="noopener noreferrer">read more</a>
            </div>
        </div>
        </div>
        
    )
}

