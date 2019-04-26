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

const removeAllBooksFromCart = (state, bookId) => {
    const bookIndex = state.cart.findIndex((book) => book.id === bookId);

    return {
        ...state,
        cart: [
            ...state.cart.slice(0, bookIndex),
            ...state.cart.slice(bookIndex + 1)
        ]
    };
};

export { removeBookFromCart, removeAllBooksFromCart };
