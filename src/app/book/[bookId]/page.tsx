import { Book } from "@/types";
import Image from "next/image";
import React from "react";
import DownloadButton from "./components/DownloadButton";

const SingleBookPage = async ({ params }: { params: { bookId: string } }) => {
    let book: Book | null = null;

    try {
        const response = await fetch(
            `${process.env.BACKEND_URL}/${params.bookId}`
        );
        book = await response.json();
    } catch (error) {
        throw new Error("Error fetching book");
    }

    if (!book) {
        throw new Error("Book not found");
    }

    return (
        <div className='p-4'>
            <div className='mx-auto grid h-96 max-w-5xl grid-cols-3 gap-10 px-5 py-10 border shadow p-2'>
                <div className='col-span-2 pr-16 text-primary-950'>
                    <h2 className='mb-5 text-5xl font-bold leading-[1.1]'>
                        {book.name}
                    </h2>
                    <span className='font-semibold'>by {book.username}</span>
                    <p className='mt-5 text-lg leading-8'>{book.email}</p>
                    <DownloadButton fileLink={book.website} />
                </div>
                <div className='flex justify-end'>
                    <Image
                        src={book.image}
                        alt={book.title ? book.title : "Book Image"}
                        width={0}
                        height={0}
                        sizes={"100vw"}
                        style={{ width: "auto", height: "12rem" }}
                    />
                </div>
            </div>
        </div>
    );
};

export default SingleBookPage;
