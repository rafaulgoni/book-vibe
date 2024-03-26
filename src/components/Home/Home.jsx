import { Link, useLoaderData } from "react-router-dom";
import BookCard from "../BookCard";

const Home = () => {

    const home = useLoaderData()
    
    return (
        <section>
            <div>
                <div className="hero bg-base-200 rounded-2xl">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src="https://i.ibb.co/KsRZbyz/44.png" className="max-w-[318px]" />
                        <div className="lg:pr-20">
                            <h1 className=" text-3xl lg:text-5xl font-bold">Books to freshen up your bookshelf</h1>
                            <p className="py-6 lg:w-9/12">We read books to explore new worlds, gain knowledge, and experience different perspectives.</p>
                            <Link to='/books'><button className="btn bg-[#23BE0A]">View The List</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" text-center m-10">
                <h1 className="text-4xl font-extrabold">Books</h1>
            </div>
            <div className=" grid grid-cols-1 lg:grid-cols-3 lg:gap-8 mb-10 space-y-5 lg:space-y-0">
                {
                    home.map( home =>(
                        <BookCard key={home.bookId} home={home}></BookCard>
                    ))
                }
            </div>
        </section>
    );
};

export default Home;