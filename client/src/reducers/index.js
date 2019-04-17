const initialState = {
    books: [],
    loading: true,
    error: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BOOKS_LOADED':
            return {
                books: action.payload,
                loading: false,
                error: false
            };

        case 'BOOKS_ERROR':
            return {
                books: action.payload,
                loading: false,
                error: true
            };

        default:
            return state;
    }
};

export default reducer;
