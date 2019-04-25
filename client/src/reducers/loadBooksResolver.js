const saveDownloadedBooks = (state, newBooks) => {
    return {
        ...state,
        books: newBooks,
        loading: false
    };
};

export { saveDownloadedBooks };
