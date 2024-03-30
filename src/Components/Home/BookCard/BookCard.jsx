import Props from 'prop-types';
import { FaRegStar } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const BookCard = ({book}) => {
    const {bookId,author,bookName,category,image,rating,tags} = book;
    return (
        <Link to={`book/${bookId}`}>
            <div className="card h-full bg-base-100 shadow-xl">
  <figure className="px-10 flex-grow pt-10">
    <img src={image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body space-y-2">
    <div>
        {tags.map((tag,id) => <span key={id} className='p-2 rounded-2xl bg-slate-100 mr-1 workSans text-[#23BE0A]'>{tag}</span>)}
    </div>
    <h2 className="card-title">{bookName} </h2>
    <p>by: <span className='font-bold playfair'>{author}</span></p>
    <div className=" border-t-2 border-dashed pt-3 flex justify-between">
        <p>{category}</p>
        <p className='flex items-center justify-end gap-1'><span className='font-bold'>{rating}</span> <FaRegStar></FaRegStar></p>
    </div>
  </div>
</div>
        </Link>
    );
};

BookCard.propTypes = {
book:Props.object,
}
export default BookCard;