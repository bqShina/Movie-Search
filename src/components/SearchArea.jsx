import React, { useEffect, useState} from 'react';
import { MovieBox } from './MovieBox';
import { SearchForm } from './SearchForm';
import ReactPaginate from 'react-paginate';
import { GlobalProvider } from './context/GlobalState';



const popularAPI = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1e448e0dfcdbb565f5d329820065b4d2";

const searchAPI = "https://api.themoviedb.org/3/search/movie?api_key=1e448e0dfcdbb565f5d329820065b4d2&";




export const SearchArea = () => {
    const [movies, setMovies] = useState([]);
    const [searchWord, setSearchWord] = useState('');
    const [searchYear, setSearchYear] = useState('');
    const [searchLang, setSearchLang] = useState('');

    

    // get movies database

    const getMovies = (API) => {
        fetch(API)
        .then(res => res.json())
        .then(data => {
            console.log(data['results']);
            
            setMovies(data['results']);
        })        
               
    }

    useEffect(() => {
        getMovies(popularAPI);


     }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(searchLang, searchWord, searchYear);
        // console.log(details);
        if(searchWord) {
            if (searchLang === 'other') {
                fetch(`${searchAPI}query=${searchWord}&year=${parseInt(searchYear)}&page=2`)
                .then(res => res.json())
                .then(data => {
                console.log(data['results']);
            
                setMovies(data['results'].filter(movie => movie['original_language'] !== "en"));
             })               
                
            } else {
                getMovies(`${searchAPI}query=${searchWord}&language=${searchLang}&year=${searchYear}`)
            }
            console.log(movies);
            setCurrentPage(0);           
        }
    }

    // Handle Search Form
      
    const handleWordChange = (e) => {
        setSearchWord(e.target.value);
    }
    const handleYearChange = (e) => {
        setSearchYear(e.target.value);
    }
    const handleLangChange = (e) => {
        setSearchLang(e.target.value);
    }


    // Movies pagination
    const moviesPerpage = 6;
    const [currentPage, setCurrentPage] = useState(0);
    

    const moviesVisited = currentPage * moviesPerpage;
    
    const currentMovies = movies.slice(moviesVisited, moviesVisited + moviesPerpage);
    // console.log(currentMovies);

    const pagesCount = Math.ceil(movies.length / moviesPerpage);
    const changePage = ({selected}) => {
        setCurrentPage(selected);
    };


    return (
        
            <div className="search-area">
            <form onSubmit={handleSubmit}>
                <SearchForm 
                    searchYear={searchYear}
                    handleYearChange={handleYearChange}
                    searchLang={searchLang}
                    handleLangChange={handleLangChange}
                    searchWord={searchWord}
                    handleWordChange={handleWordChange}
                />                
            </form>
            <GlobalProvider>
            <div className="movie-gallery">
                {currentMovies.length > 0 ? currentMovies.map((movie) => (
                    <MovieBox key={movie.id} {...movie}             
                    />
                )) : <h2>There are no search results. Please try again!</h2>}               
            </div>
                
                <ReactPaginate 
                    previousLabel="Previous"
                    nextLabel="Next"
                    pageCount={pagesCount}
                    onPageChange={changePage}
                    containerClassName="paginationBtns"
                    previousLinkClassName="previousBtn"
                    nextLinkClassName="nextBtn"
                    disabledClassName="paginationDisabled"
                    activeClassName="paginationActive"
                /> 
                </GlobalProvider>                  
            </div>
        
        
    )

}