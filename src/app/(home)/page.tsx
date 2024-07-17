import Image from "next/image";
import Banner from "./components/Banner";
import BookList from "./components/BookList";
import { Suspense } from "react";
import Loading from "@/components/Loading";

export default async function Home() {
    return (
        <div className='p-4'>
            <Banner />
            <Suspense fallback={<Loading />}>
                <BookList />
            </Suspense>
        </div>
    );
}
