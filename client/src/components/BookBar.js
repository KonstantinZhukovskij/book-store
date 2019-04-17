import { booksLoaded } from 'actions';
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
        return (
            <div className='bookBar'>
                {this.props.books.map((book, index) => {
                    return <BookCard
                        book={book}
                        key={index}
                    />;
                })}
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        books: state.books,
        loading: state.loading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        booksLoaded: (newBooks) => {
            dispatch(booksLoaded(newBooks));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookBar);
