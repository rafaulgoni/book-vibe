import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

import { IoIosArrowDown } from "react-icons/io";

const Books = () => {
    
    const [tabIndex, setTabIndex] = useState()
   
    return (
        <section>
            <div className="text-center p-4 bg-gray-200">
                <h1 className="text-2xl font-bold font-family">
                    Book
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
                    <Link
                        to='/books'
                        onClick={() => setTabIndex(0)}
                        className={`flex cursor-pointer items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border border-b-0 font-bold' : 'border-b'
                            }  `}
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            className='w-4 h-4'
                        >
                            <path d='M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z'></path>
                        </svg>
                        <span className="font-family">Read Books</span>
                    </Link>
                    <Link
                        to={`wishlist`}
                        onClick={() => setTabIndex(1)}
                        className={`flex cursor-pointer items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border border-b-0 font-bold' : 'border-b'
                            }  `}
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            className='w-4 h-4'
                        >
                            <path d='M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z'></path>
                            <path d='M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z'></path>
                        </svg>
                        <span className="font-family">Wishlist Books</span>
                    </Link>
                </div>
            </div>
            <Outlet></Outlet>
        </section>
    );
};

export default Books;