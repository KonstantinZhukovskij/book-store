const saveDownloadedBooks = (newBooks) => {
    return {
        type: 'BOOKS_LOADED',
        payload: newBooks
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
    saveDownloadedBooks,
    addBookToCart,
    removeBookFromCart,
    removeAllBookFromCart
};
