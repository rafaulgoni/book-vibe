import { Link, useLoaderData, useParams } from "react-router-dom";
import { bookSave, readSave } from "../localStorage";


const Details = () => {
  const details = useLoaderData();
  const { bookId } = useParams();
  const idInt = parseInt(bookId)
  const bookDetails = details.find(bookDetails => bookDetails.bookId === idInt);

  const storeBook =()=>{
    bookSave(idInt);
  }

  const storeRead = () =>{
    readSave(idInt)
  }

  return (
    <div className=" mt-10 lg:mb-52 mb-10 w-full">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure><img className=" h-96" src={bookDetails.image} alt="Album" /></figure>
        <div className="card-body lg:ml-20">
          <h2 className="card-title">{bookDetails.bookName}</h2>
          <p className="font-family">By: {bookDetails.author}</p>
          <hr />
          <div>
            <h1 className="font-family">{bookDetails.category}</h1>
          </div>
          <hr />
          <div>
            <h1 className="max-w-[800px] font-family"><samp className="font-bold">Review:</samp>{bookDetails.review}</h1>
            <div className="font-family">
              <button className="font-bold">tags:</button>
              <button className=" text-[#23BE0A] p-1">{bookDetails.tags[0]}</button>
              <button className=" text-[#23BE0A] p-1">{bookDetails.tags[1]}</button>
            </div>
          </div>
          <hr />
          <div>
              <h1 className="font-family">Number of Pages:<samp className="lg:ml-4 font-bold">{bookDetails.totalPages}</samp></h1>
              <h1 className="font-family">Publisher:<samp className="lg:ml-20 font-bold">{bookDetails.publisher}</samp></h1>
              <h1 className="font-family">Year of Publishing:<samp className="lg:ml-3 font-bold">{bookDetails.yearOfPublishing}</samp></h1>
              <h1 className="font-family">Rating:<samp className="lg:ml-24 font-bold">{bookDetails.rating}</samp></h1>
          </div>
          <div className="card-actions">
            <Link to='/books'><button onClick={storeBook} className="btn text-white bg-[#23BE0A]">Read</button></Link>
            <Link to='/books'><button onClick={storeRead} className="btn text-white bg-[#59C6D2]">Wishlist</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;