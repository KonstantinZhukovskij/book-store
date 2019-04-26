import toastr from 'services/toastr';

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

export { addBookToCart };
