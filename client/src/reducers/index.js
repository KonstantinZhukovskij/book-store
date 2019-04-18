const initialState = {
    books: [],
    cart: [],
    loading: true,
    error: false
};

const reducer = (state = initialState, action) => {
    console.log('reducer', action.type);

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

        case 'BOOK_ADDED_TO_CART':
            const bookId = action.payload;
            const book = state.books.find((book) => book.id === bookId);
            const newBook = {
                id: book.id,
                title: book.title,
                author: book.author,
                price: book.price
            };

            return {
                ...state,
                cart: [
                    ...state.cart,
                    newBook
                ]
            };

        default:
            return state;
    }
};

export default reducer;
