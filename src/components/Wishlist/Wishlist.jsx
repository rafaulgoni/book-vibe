import { useLoaderData } from "react-router-dom";
import WishRead from "../WishRead";
import { useEffect, useState } from "react";
import { getReadSave } from "../localStorage";


const Wishlist = () => {
    const reads = useLoaderData();
    const [addBooks, setAddBooks] = useState([]);
    
    useEffect(() => {
        const storeId = getReadSave();
        if (reads.length > 0) {
            // const addBook = reads.filter(read => storeId.includes(read.bookId))
            const addBook = [];
            for (const id of storeId) {
                const book = reads.find(book => book.bookId === id);
                if (book) {
                    addBook.push(book)
                }
            }
            setAddBooks(addBook)
        }
    }, [reads])
    return (
        <div className="space-y-3">
                {
                    addBooks.map(addBooks => (
                        <WishRead key={addBooks.bookId} addBooks={addBooks}></WishRead>
                    ))
                }
            </div>
    );
};

export default Wishlist;