import { bookAddedToCart, booksLoaded } from 'actions';
import BookCard from 'components/BookCard';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import getBooks from 'services/bookService';

class BookBar extends Component {
    componentDidMount() {
        const books = getBooks();

        this.props.booksLoaded(books);
    }

    render() {
        const { books, bookAddedToCart } = this.props;

        return (
            <div className='bookBar'>
                {books.map((book, index) => {
                    return (
                        <BookCard
                            book={book}
                            bookAddedToCart={bookAddedToCart}
                            key={index}
                        />
                    );
                })}
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        books: state.books,
        loading: state.loading,
        cart: state.cart
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        booksLoaded: (newBooks) => {
            dispatch(booksLoaded(newBooks));
        },
        bookAddedToCart: (bookId) => {
            dispatch(bookAddedToCart(bookId));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookBar);
