import { Link } from "react-router-dom";


const Home = () => {
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
            <Link to='/details'>
                <div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </section>
    );
};

export default Home;