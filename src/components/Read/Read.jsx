import { useEffect, useState } from "react";
import AddCard from "../AddCard";
import { getBookSave } from "../localStorage";
import { useLoaderData } from "react-router-dom";


const Read = () => {

    const books = useLoaderData();
    const [addBooks, setAddBooks] = useState([]);
   
    useEffect(() => {
        const storeId = getBookSave();
        if (books.length > 0) {
            // const addBook = books.filter(book => storeId.includes(book.bookId))
            const addBook = [];
            for (const id of storeId) {
                const book = books.find(book => book.bookId === id);
                if (book) {
                    addBook.push(book)
                }
            }
            setAddBooks(addBook);
        }
    }, [books])
    return (
        <div className="space-y-3">
            {
                addBooks.map(addBooks => (
                    <AddCard key={addBooks.bookId} addBooks={addBooks}></AddCard>
                ))
            }
        </div>
    );
};

export default Read;