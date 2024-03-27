
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getBookSave } from "../localStorage";


const Pages = () => {
    const books = useLoaderData();
    const [addBooks, setAddBooks] = useState([]);

    useEffect(() => {
        const storeId = getBookSave();
        if (books.length > 0) {
            const addBook = [];
            for (const id of storeId) {
                const book = books.find(book => book.bookId === id);
                if (book) {
                    addBook.push(book)
                }
            }
            setAddBooks(addBook)
        }
    }, [books])

    return (
       <div>
        <h1>hi:{addBooks.length}</h1>
       </div>
    );
};

export default Pages;