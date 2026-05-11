"use client";

import { Button, Card, Separator } from "@heroui/react";
import Image from "next/image";
import { useParams } from "next/navigation";

//  {
//     "id": 1,
//     "title": "Harry Potter and the Philosopher's Stone",
//     "author": "J.K. Rowling",
//     "description": "A young boy discovers he is a wizard and begins his journey at Hogwarts School of Witchcraft and Wizardry.",
//     "category": "Story",
//     "available_quantity": 8,
//     "image_url": "/images/1.jpg"
//   },

const bookDetailsPage = async ({ param }) => {
  const { id } = useParams();
  const res = await fetch("https://book-nest-tau-sable.vercel.app/data.json");
  const books = await res.json();
  const book = books.find((b) => b.id == id);
  return (
    <div className="container mx-auto ">
      <h1 className="text-3xl mt-5 mb-5 font-bold">Books Details</h1>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row gap-2">
          {/* <img
      src={book?.image_url}
    /> */}

          <img src={book?.image_url} className="h-[600px]"></img>
          <div>
            <h1 className="text-5xl font-bold">{book?.title}</h1>
            <p className="py-6">
              <span className="text-xl font-bold"> Author:</span> {book?.author}
            </p>
            <p className="py-6">
              {" "}
              <span className="text-xl font-bold"> Description:</span>
              {book?.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default bookDetailsPage;
