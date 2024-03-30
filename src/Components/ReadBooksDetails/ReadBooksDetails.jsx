import { useLoaderData, useParams } from "react-router-dom";

const ReadBooksDetails = () => {
    const books = useLoaderData();
    const {id} = useParams();
    console.log(id)
    const readBooksDetails = books.find(book => book.bookId == id);
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
	} = readBooksDetails;
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
				</div>
			</div>
		</div>
	);
};

export default ReadBooksDetails;