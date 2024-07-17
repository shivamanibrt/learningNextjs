import Image from "next/image";
import Banner from "./components/Banner";
import BookList from "./components/BookList";

export default async function Home() {
    const response = await fetch(`${process.env.BACKEND_URL}`);

    if (!response.ok) {
        throw new Error("An error occured while fetching the data");
    }

    const books = await response.json();

    return (
        <>
            <Banner />
            <BookList books={books} />
        </>
    );
}
