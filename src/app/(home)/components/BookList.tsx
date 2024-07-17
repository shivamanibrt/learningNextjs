import { Book } from "@/types";
import React, { cache } from "react";
import BookCard from "./BookCard";

const BookList = async () => {
    const response = await fetch(`${process.env.BACKEND_URL}`, {
        cache: "no-cache",
        next: {
            revalidate: 100,
        },
    });

    if (!response.ok) {
        throw new Error("An error occured while fetching the data");
    }

    let books = await response.json();

    return (
        <div className='grid grid-cols-2 gap-8 md:grid-cols-3 max-w-7xl mx-auto mb-10'>
            {books.map((book: Book) => (
                <BookCard key={book.id} book={book} />
            ))}
        </div>
    );
};

export default BookList;
