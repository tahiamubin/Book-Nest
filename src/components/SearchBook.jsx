'use client'
import { useSearchParams } from "next/navigation";
import React from "react";
import BookCard from "./BookCard";

const SearchBook = ({books}) => {
  function searchBooks() {
    const searchParams = useSearchParams();
    const search = searchParams.get("Search");

    const handleSearch = (e) => {
      const params = new URLSearchParams(searchParams);
      params.set("Search", e.target.value);
    };
    const filterBooks = search ? (
      books.filter((book) =>
        book.title.toLowerCase().includes(search.toLowerCase()),
      )
    ) : (
      <p>Books not found</p>
    );
  }
  return (
    <div>
      <label className="input">
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
          required
          placeholder="Search"
          defaultValue={Search}
          onChange={handleSearch}
        />
      </label>
      {filterBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
    </div>
  );
};

export default SearchBook;
