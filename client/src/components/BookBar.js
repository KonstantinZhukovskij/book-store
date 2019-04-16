import BookCard from 'components/BookCard';
import React from 'react';

const BookBar = () => {
    return (
        <div className='bookBar'>
            <BookCard/>
            <BookCard/>
            <BookCard/>
            <BookCard/>
            <BookCard/>
            <BookCard/>
            <BookCard/>
            <BookCard/>
        </div>
    );
};

export default BookBar;