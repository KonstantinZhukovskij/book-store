import toastr from 'services/toastr';

const initialState = {
    books: [],
    cart: [],
    loading: true,
    error: false
};

const addBookToCart = (state, bookId) => {
    const selectedBook = state.books.find((book) => book.id === bookId);
    const bookIndex = state.cart.findIndex((book) => book.id === bookId);

    if (bookIndex === -1) {
        toastr.success('Book has been added to cart', 'Success');

        const book = {
            ...selectedBook,
            amount: 1,
            sumTotal: selectedBook.price
        };

        return {
            ...state,
            cart: [
                ...state.cart,
                book
            ]
        };
    } else {
        const bookInCart = state.cart.find((book) => book.id === bookId);

        const book = {
            ...bookInCart,
            amount: ++bookInCart.amount,
            sumTotal: bookInCart.price * bookInCart.amount
        };

        return {
            ...state,
            cart: [
                ...state.cart.slice(0, bookIndex),
                book,
                ...state.cart.slice(bookIndex + 1)
            ]
        };
    }
};

const removeBookFromCart = (state, bookId) => {
    const bookInCart = state.cart.find((book) => book.id === bookId);
    const bookIndex = state.cart.findIndex((book) => book.id === bookId);

    const book = {
        ...bookInCart,
        amount: --bookInCart.amount,
        sumTotal: bookInCart.price * bookInCart.amount
    };

    if (bookInCart.amount === 0) {
        return {
            ...state,
            cart: [
                ...state.cart.slice(0, bookIndex),
                ...state.cart.slice(bookIndex + 1)
            ]
        };
    } else {
        return {
            ...state,
            cart: [
                ...state.cart.slice(0, bookIndex),
                book,
                ...state.cart.slice(bookIndex + 1)
            ]
        };
    }
};

const removeAllBookFromCart = (state, bookId) => {
    const bookIndex = state.cart.findIndex((book) => book.id === bookId);

    return {
        ...state,
        cart: [
            ...state.cart.slice(0, bookIndex),
            ...state.cart.slice(bookIndex + 1)
        ]
    };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BOOKS_LOADED':
            return {
                ...state,
                books: action.payload,
                loading: false,
                error: false
            };

        case 'BOOKS_ERROR':
            return {
                ...state,
                books: action.payload,
                loading: false,
                error: true
            };

        case 'ADD_BOOK_TO_CART':
            return addBookToCart(state, action.payload);

        case 'REMOVE_BOOK_FROM_CART':
            return removeBookFromCart(state, action.payload);

        case 'REMOVE_ALL_BOOK_FROM_CART':
            return removeAllBookFromCart(state, action.payload);

        default:
            return state;
    }
};

export default reducer;
