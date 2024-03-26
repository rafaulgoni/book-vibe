import { Link } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";
const BookCard = ({ home }) => {

    const {image, bookName, author, category, rating, tags} = home;
    return (
        <Link to={`/details/${home.bookId}`}>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl w-60 h-80" />
                </figure>
                <div className="card-body">
                    <div className=" flex justify-around">
                        <button className=" text-[#23BE0A] p-1">{tags[0]}</button>
                        <button className=" text-[#23BE0A] p-1">{tags[1]}</button>
                    </div>
                    <h2 className="card-title">{bookName}</h2>
                    <p className="font-family">By: {author}</p>
                    <hr className="border-dashed"/>
                    <div className="flex justify-between">
                        <button className="font-family">{category}</button>
                        <button className="flex justify-center items-center font-family">{rating}<FaRegStar></FaRegStar></button>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default BookCard;