import BookCard from "../BookCard/BookCard";
import Props from 'prop-types';
const BooksSection = (props) => {
    const {books} = props;
    return (
        <div>
            <h2 className="text-3xl font-bold playfair text-center mt-5 lg:mt-8">Books</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3">
  {books.map(book => <BookCard key={book.id} book={book} ></BookCard>)}
            </div>
        </div>
    );
};
BooksSection.propTypes = {
books:Props.object
}
export default BooksSection;