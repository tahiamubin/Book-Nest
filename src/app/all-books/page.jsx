"use client";
import BookCard from "@/components/BookCard";
import SearchBook from "@/components/SearchBook";
import React, { useEffect, useState } from "react";

const allBookPage = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    fetch("https://book-nest-tau-sable.vercel.app/data.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  // const res = await fetch("https://book-nest-tau-sable.vercel.app/data.json");
  // const books = await res.json();

  const filterBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase()),
  );
  const categoryBooks =
    category === "All"
      ? books
      : books.filter((book) => book.category === category);

  //const filterBooks = books.filter (book => book.title.toLowerCase());
  return (
    <div className="container mx-auto">
      <div className="space-y-5">
        <h1 className="text-3xl font-bold mt-5">All Books</h1>

        {/* search */}
        <div className=" flex justify-between">
          <label className="input w-xl">
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
              required
              placeholder="Search"
            />
          </label>

          <details className="dropdown">
            <summary className="btn m-1">Category</summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
              <li onClick={() => setCategory("All")}>
                <a>All</a>
              </li>
              <li onClick={() => setCategory("Tech")}>
                <a>Tech</a>
              </li>
              <li onClick={() => setCategory("Science")}>
                <a>Science</a>
              </li>
              <li onClick={() => setCategory("Story")}>
                <a>Story</a>
              </li>
            </ul>
          </details>
        </div>

        {/* <SearchBook books={books}></SearchBook> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 space-y-6 mt-10">
        {filterBooks.map((book) => (
          <BookCard key={book.id} book={book}></BookCard>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 space-y-6 mt-10">
        {categoryBooks.map((book) => (
          // <BookCard key={book.id} book={book}></BookCard>
          <div key={book.id}>
            <h3>{book.title}</h3>
            <p>{book.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default allBookPage;
