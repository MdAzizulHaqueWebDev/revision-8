import { useLoaderData } from "react-router-dom";
import { getBookId } from "../LocalStorage/LocalStorage";
import SortPage from "./SortPage";

const SortPages = () => {
    const books = useLoaderData();
	// const [readBooks, setReadBooks] = useState([]);
	const getLocalReadBookId = getBookId();
	const reads = getLocalReadBookId.map((id) => parseInt(id));
	// const sortedIds = reads.sort((a, b) => b - a);
	// console.log(sortedIds);
	const readBooks = books.filter((book) => reads.includes(book.bookId));
    console.log(readBooks)
    const sortedBook = readBooks.sort((a,b)=> b.totalPages - a.totalPages )
    console.log(sortedBook)
    return (
        <div>
          {sortedBook?.map((book, inx) => (
				<SortPage key={inx} book={book}></SortPage>
			))}
        </div>
    );
};

export default SortPages;