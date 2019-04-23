import { addBookToCart, booksLoaded } from 'actions';
import BookCard from 'components/BookCard';
import Spinner from 'components/Spinner';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import getBooks from 'services/bookService';

class BookPanel extends Component {
    componentDidMount() {
        const { booksLoaded } = this.props;

        const books = getBooks();
        booksLoaded(books);
    }

    render() {
        const { books, loading, addBookToCart } = this.props;

        if (loading) {
            return <Spinner/>;
        }

        return (
            <div className='bookPanel'>
                {books.map((book) => {
                    return (
                        <BookCard
                            book={book}
                            addBookToCart={addBookToCart}
                            key={book.id}
                        />
                    );
                })}
            </div>
        );
    };
}

const mapStateToProps = ({ books, loading }) => {
    return { books, loading };
};

const mapDispatchToProps = { booksLoaded, addBookToCart };

export default connect(mapStateToProps, mapDispatchToProps)(BookPanel);
