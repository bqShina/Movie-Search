const AppReducer = (state, action) => {
    switch(action.type) {
        case "MARK_MOVIE_WATCH":
            return {
                ...state,
                watchedList: [action.payload, ...state.watchedList]
            }

        default:
            return state;
    }
}

export default AppReducer;