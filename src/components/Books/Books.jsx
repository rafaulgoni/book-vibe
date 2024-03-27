import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getBookSave } from "../localStorage";
import AddCard from "../AddCard";
import { IoIosArrowDown } from "react-icons/io";

const Books = () => {
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
        <section>
            <div className="text-center p-4 bg-gray-200">
                <h1 className="text-2xl font-bold font-family">
                    Book:{addBooks.length}
                </h1>
            </div>
            <div className="text-center">
                <details className="dropdown">
                    <summary className="m-1 btn bg-[#23BE0A] font-family text-white">Sort By <IoIosArrowDown></IoIosArrowDown></summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li className="font-family"><a>Number of pages</a></li>
                        <li className="font-family"><a>publisher year</a></li>
                        <li className="font-family"><a>Rating</a></li>
                    </ul>
                </details>
            </div>
            <div>
                <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden flex-nowrap dark:bg-gray-100 dark:text-gray-800 mb-2">
                    <a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b dark:border-gray-600 dark:text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                        </svg>
                        <span className="font-family">Read Books</span>
                    </a>
                    <a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border border-b-0 rounded-t-lg dark:border-gray-600 dark:text-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                        </svg>
                        <span className="font-family">Wishlist Books</span>
                    </a>
                </div>
            </div>
            <div className="space-y-3">
                {
                    addBooks.map(addBooks => (
                        <AddCard key={addBooks.bookId} addBooks={addBooks}></AddCard>
                    ))
                }
            </div>
        </section>
    );
};

export default Books;