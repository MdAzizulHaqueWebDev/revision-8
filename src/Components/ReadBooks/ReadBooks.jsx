/** @format */

import { useLoaderData } from "react-router-dom";
import { getBookId } from "../LocalStorage/LocalStorage";
import ReadBook from "./ReadBook";

const ReadBooks = () => {
	const books = useLoaderData();
	// const [readBooks, setReadBooks] = useState([]);
	// const sortedIds = reads.sort((a, b) => b - a);
	// console.log(sortedIds);
	const getLocalReadBookId = getBookId();
	const reads = getLocalReadBookId.map((id) => parseInt(id));
	const data = books.filter((book) => reads.includes(book.bookId));

	return (
		<div className="p-2">
			{data?.map((readBook, inx) => (
				<ReadBook key={inx} readBook={readBook}></ReadBook>
			))}
		</div>
	);
};

export default ReadBooks;
