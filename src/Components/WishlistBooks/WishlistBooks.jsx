import { Outlet, useLoaderData } from "react-router-dom";
import { getWishlistId } from "../../WishlistLocalStorage/WishListLocalStorage";
import { useEffect, useState } from "react";
import WishBook from "../WishBook/WishBook";

const WishlistBooks = () => {
    const books = useLoaderData();
	const getLocalWishBookId = getWishlistId();
	const [wishBooks, setWishBook] = useState([]);
	useEffect(() => {
		const readWishVar = [];
		for (const id of getLocalWishBookId) {
			for (const book of books) {
				if (book.bookId == id) {
		readWishVar.push(book);
				}
			}
		}
		setWishBook(readWishVar);
	}, []);
console.log(wishBooks)
    return (
        <div>
			<Outlet></Outlet>
           {wishBooks?.map(wishBook=> <WishBook key={wishBook.id} wishBook={wishBook} ></WishBook> )}
        </div>
    );
};

export default WishlistBooks;