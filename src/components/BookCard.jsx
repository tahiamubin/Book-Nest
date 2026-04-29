import { Button, Card, Chip, Separator } from '@heroui/react';
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
      <Card className="border rounded-xl">
        <div className="relative w-full aspect-square">
          {/* <Image
            src={photo.imageUrl}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt={photo.title}
            className="object-cover rounded-xl"
          /> */}

          <Chip size="sm" className="absolute right-2 top-2">
            {book.category}
          </Chip>
        </div>

        <div>
          <h2 className="font-medium">{book.title}</h2>
        </div>

        <div className="flex gap-5">
          <div className="flex items-center gap-2">
            <p>
              <FaHeart />
            </p>
            <p>{book.image_url}</p>
          </div>

          <Separator orientation="vertical" />

          <div className="flex items-center gap-2">
            <p>
              <BiDownload />
            </p>
            <p>{book.downloads}</p>
          </div>
        </div>

        <Link >
        {/* href={`/all-books/${photo.id}`} */}
          <Button variant="outline" className={"w-full"}>
            View
          </Button>
        </Link>
      </Card>
    </div>
    );
};

export default BookCard;