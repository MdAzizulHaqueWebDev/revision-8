	/** @format */

	import { useLoaderData, useParams } from "react-router-dom";
	import { saveBookIdInLocal } from "../LocalStorage/LocalStorage";
	import { ToastContainer, toast } from "react-toastify";
	import "react-toastify/dist/ReactToastify.css";
	import { saveWishId } from "../../WishlistLocalStorage/WishListLocalStorage";

	const BookDetails = () => {
	const { id } = useParams();
	const success = () => toast.success("Added ReadBooklists",{
	position: "top-center",
	autoClose: 2000,
	});
	const wishSuccess = () => toast.success("Added Wishlists ",{
	position: "top-center",
	autoClose: 2000,
	});
	const allReadyExits = () =>
	toast.error("Already You Readed", {
	position: "top-center",
	autoClose: 2000,
	});
	const wishExits = () =>
	toast.error("Already has Wishlists", {
	position: "top-center",
	autoClose: 2000,
	});
	const alreadyRead = () =>
	toast.error("Already Read", {
	position: "top-center",
	autoClose: 2000,
	});

	const handleReadBtn = () => {
	const localBookId = JSON.parse(localStorage.getItem("id"));
	const exitsReadBook = localBookId?.find(localId => localId == id);
	if (!exitsReadBook) {
	success();
	} else {
	allReadyExits();
	}
	saveBookIdInLocal(id);
	};

	const handleWishBtn =() =>{
	const localWishId = JSON.parse(localStorage.getItem('wishId'));
	const exits = localWishId?.find(wId => wId == id);
	const localBookId = JSON.parse(localStorage.getItem("id"));
	const exitsReadBook = localBookId.find((localId) => localId == id);
	if(exitsReadBook == id){
	return alreadyRead()
	}
	if(!exits){
	wishSuccess()
	}else{
	wishExits()
	}
	saveWishId(id);
	}

	const books = useLoaderData();
	const book = books?.find((book) => book.bookId == id);
	const {
	author,
	bookName,
	category,
	image,
	rating,
	tags,
	publisher,
	review,
	totalPages,
	yearOfPublishing,
	} = book;
	return (
	<div>
	<div className="card lg:card-side bg-base-100 shadow-xl">
	<figure className="lg:w-1/2">
	<img className="rounded-2xl p-8 " src={image} />
	</figure>
	<div className="card-body space-y-3">
	<h2 className="card-title">{bookName}</h2>
	<p>
	by: <span className="font-bold">{author}</span>{" "}
	</p>{" "}
	<hr />
	<p>{category}</p>
	<hr />
	<div className="flex  gap-1">
	<h3>Tag: </h3>
	{tags.map((tag, id) => (
	<p key={id}>
	<p className="text-green-400 text-center rounded-xl p-1 bg-slate-100">
	{tag}
	</p>
	</p>
	))}
	</div>
	<p>
	<span className="font-bold">Review</span>:{review}
	</p>{" "}
	<hr />
	<div className="overflow-x-auto">
	<table className="table">
	<tbody>
	<tr>
	<th>Pages of book</th>
	<td>{totalPages}</td>
	</tr>
	<tr>
	<th>Publisher</th>
	<td>{publisher}</td>
	</tr>
	<tr>
	<th>year of publishing</th>
	<td>{yearOfPublishing}</td>
	</tr>
	<tr>
	<th>Rating</th>
	<td>{rating}</td>
	</tr>
	</tbody>
	</table>
	</div>
	<div className="card-actions justify-start">
	<button onClick={handleReadBtn} className="btn">
	Read
	</button>
	<button onClick={handleWishBtn} className="btn bg-[#50B1C9]">Wishlist</button>
	</div>
	</div>
	</div>
	<ToastContainer></ToastContainer>
	</div>
	);
	};

	export default BookDetails;
