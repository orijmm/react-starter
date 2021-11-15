const reducer = (state, action) => {
    switch (action.type) {
        case 'DELETE_PAGINA':
            return {
                ...state,
                pagina: state.pagina.filter(
                    (index) => false,
                ),
            };
        case 'SET_PRELOADER':
            return {
                ...state,
                preloader: action.payload
            };
        case 'SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.payload
            };

        case 'SET_PAGE':
            return {
                ...state,
                page: action.payload
            };
        default:
            return state;
    }
};

export default reducer;