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

const bookAddedToCart = (bookId) => {
    return {
        type: 'BOOK_ADDED_TO_CART',
        payload: bookId
    };
};

export {
    booksLoaded,
    booksError,
    bookAddedToCart
};
