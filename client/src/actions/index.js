const booksLoaded = (newBooks) => {
    return {
        type: 'BOOKS_LOADED',
        payload: newBooks
    };
};

const booksError = (error) => {
    return {
        type: 'BOOKS_ERROR',
        payload: error
    };
};

const addBookToCart = (bookId) => {
    return {
        type: 'ADD_BOOK_TO_CART',
        payload: bookId
    };
};

const removeBookFromCart = (bookId) => {
    return {
        type: 'REMOVE_BOOK_FROM_CART',
        payload: bookId
    };
};

const removeAllBookFromCart = (bookId) => {
    return {
        type: 'REMOVE_ALL_BOOK_FROM_CART',
        payload: bookId
    };
};

export {
    booksLoaded,
    booksError,
    addBookToCart,
    removeBookFromCart,
    removeAllBookFromCart
};
