
'use client'
import BookCard from "@/components/BookCard";
import SearchBook from "@/components/SearchBook";
import React, { useEffect, useState } from "react";

const allBookPage = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
  fetch("https://book-nest-tau-sable.vercel.app/data.json")
  .then ((res) => res.json())
  .then ((data) => setBooks(data));
}, []);

  // const res = await fetch("https://book-nest-tau-sable.vercel.app/data.json");
  // const books = await res.json();


  const filterBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );
  //const filterBooks = books.filter (book => book.title.toLowerCase());
  return (
    <div className="container mx-auto">
      <div className="space-y-5">
        <h1 className="text-3xl font-bold mt-5">All Books</h1>

        {/* search */} 
        <label className="input w-full">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
          type="search" 
          onChange={(e) => setSearch(e.target.value)} 
          required placeholder="Search" />
        </label>
        {/* <SearchBook books={books}></SearchBook> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 space-y-6 mt-10">
        {filterBooks.map((book) => (
          <BookCard key={book.id} book={book}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default allBookPage;
