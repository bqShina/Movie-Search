import React, {createContext, useReducer, useEffect}from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = { 
    watchedList: localStorage.getItem("IdLists") ? JSON.parse(localStorage.getItem("IdLists")) : []
};

// Creeate contextt
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        localStorage.setItem("IdLists", JSON.stringify(state.watchedList), [state])
    })

    // Actions
    const markMovieWatch = (movie) => {
        dispatch({ type: "MARK_MOVIE_WATCH", payload: movie });
    }

    return (
        <GlobalContext.Provider value={{
            watchedList: state.watchedList,
            markMovieWatch
            }}  >
            {props.children}
        </GlobalContext.Provider>
    )
}
