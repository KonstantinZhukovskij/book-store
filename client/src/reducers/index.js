import { addBookToCart } from 'reducers/addBooksResolver';
import { saveDownloadedBooks } from 'reducers/loadBooksResolver';
import { removeAllBooksFromCart, removeBookFromCart } from 'reducers/removeBooksResolver';

const initialState = {
    books: [],
    cart: [],
    loading: true
};

const actionResolverMapping = {
    'BOOKS_LOADED': saveDownloadedBooks,
    'ADD_BOOK_TO_CART': addBookToCart,
    'REMOVE_BOOK_FROM_CART': removeBookFromCart,
    'REMOVE_ALL_BOOK_FROM_CART': removeAllBooksFromCart
};

const reducer = (state = initialState, action) => {
    const resolver = actionResolverMapping[action.type];

    if (resolver) {
        return resolver(state, action.payload);
    }

    return state;
};

export default reducer;
