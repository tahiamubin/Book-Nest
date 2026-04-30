import React from 'react';
import BookCard from './BookCard';

const FeaturedBook = async() => {
    const res = await fetch("https://book-nest-tau-sable.vercel.app/data.json");
    const books = await res.json();
   

    
    return (
        <div className='container mx-auto'>
          <h1 className='text-3xl font-bold mt-5'>Featured Books</h1>  
          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 space-y-6 mt-10'>
            {
               books.slice(0,8).map (book => <BookCard key={book.id} book={book}></BookCard>)
            }
          </div>
        </div>
    );
};

export default FeaturedBook;