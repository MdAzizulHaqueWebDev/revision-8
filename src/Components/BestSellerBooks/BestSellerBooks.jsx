import { useLoaderData } from "react-router-dom";
import BestSellerBookCard from "./BestSellerBookCard";

const BestSellerBooks = () => {
   
    const bestSellerBooks = useLoaderData();
    return (
        <div>
          {bestSellerBooks?.map(book => <BestSellerBookCard key={book.id} book={book} ></BestSellerBookCard>)}  
        </div>
    );
};

export default BestSellerBooks;