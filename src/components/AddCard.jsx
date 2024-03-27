import { CiLocationOn } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { MdOutlineFindInPage } from "react-icons/md";

const AddCard = ({ addBooks }) => {
    const { bookName, tags, category, rating, yearOfPublishing, image, author, totalPages, publisher } = addBooks

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img className="w-48" src={image} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{bookName}</h2>
                <p className=" font-family">By:{author}</p>
                <div className="font-family lg:flex gap-2">
                    <button className="font-bold">tags:</button>
                    <button className=" text-[#23BE0A] p-1">{tags[0]}</button>
                    <button className=" text-[#23BE0A] p-1">{tags[1]}</button>
                    <button className=" flex justify-center items-center"><CiLocationOn></CiLocationOn>Year of Publishing: {yearOfPublishing}</button>
                </div>
                <div className="lg:flex gap-2">
                    <button className="flex justify-center items-center font-family"><CgProfile></CgProfile>Publisher: {publisher}</button>
                    <button className="flex justify-center items-center font-family"><MdOutlineFindInPage></MdOutlineFindInPage>Pages: {totalPages}</button>
                </div>
                <hr />
                <div className="card-actions">
                    <button className="btn bg-[#328EFF] text-white rounded-3xl font-family">Category: {category}</button>
                    <button className="btn bg-[#FFAC33] text-white rounded-3xl font-family">Rating: {rating}</button>
                    <button className="btn bg-[#23BE0A] text-white rounded-3xl font-family">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default AddCard;