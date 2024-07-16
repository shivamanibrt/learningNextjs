import { Book } from "@/types";
import React from "react";

const BookList = ({ books }: { books: Book[] }) => {
    return (
        <div>
            {books.map((book) => (
                <h1 key={book.id}>{book.name}</h1>
            ))}
        </div>
    );
};

export default BookList;
