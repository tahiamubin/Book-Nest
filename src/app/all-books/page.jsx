import BookCard from "@/components/BookCard";
import SearchBook from "@/components/SearchBook";
import React from "react";

const allBookPage = async () => {
  const res = await fetch("https://book-nest-tau-sable.vercel.app/data.json");
  const books = await res.json();

  //const filterBooks = books.filter (book => book.title.toLowerCase());
  return (
    <div className="container mx-auto">
      <div className="space-y-5">
        <h1 className="text-3xl font-bold mt-5">Featured Books</h1>
        {/* <SearchBook books={books}></SearchBook> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 space-y-6 mt-10">
        {books.map((book) => (
          <BookCard key={book.id} book={book}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default allBookPage;
