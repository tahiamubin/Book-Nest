import { Button, Card, Chip, Separator } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiDownload } from 'react-icons/bi';
import { FaHeart } from 'react-icons/fa';
// {
//     "id": 1,
//     "title": "The Midnight Library",
//     "author": "Matt Haig",
//     "description": "A novel about a library between life and death, where each book represents a different life you could have lived.",
//     "category": "Story",
//     "available_quantity": 5,
//     "image_url": "/images/1.jpg"
//   },

const BookCard = ({book}) => {
    return (
        <div >
      <Card className=' transition-transform duration-300 hover:scale-105'>
        <div className="relative w-full aspect-square">
          <Image
            src={book.image_url}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt={book.title}
            className="object-cover rounded-xl  !inset-2"
          />

          <Chip size="sm" className="absolute right-2 top-2">
            {book.category}
          </Chip>
        </div>

        <div>
          <h2 className="text-xl font-bold p-2">{book.title}</h2>
        </div>

        <div className="flex gap-5">


          <Separator orientation="vertical" />

          <div className="flex items-center gap-2">
          </div>
        </div>

        <Link href={`/all-books/${book.id}`} >
          <Button  className={"w-full btn btn-active"}>
            View Detail
          </Button>
        </Link>
      </Card>
    </div>
    );
};

export default BookCard;