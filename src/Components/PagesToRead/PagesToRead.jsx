/** @format */

import { useLoaderData } from "react-router-dom";
import { getBookId } from "../LocalStorage/LocalStorage";
import { useEffect, useState } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
const PagesToRead = () => {
	const books = useLoaderData();
	const getLocalReadBookId = getBookId();
	const [readBooks, setReadBooks] = useState([]);
	useEffect(() => {
		const readBooksVar = [];
		for (const id of getLocalReadBookId) {
			for (const book of books) {
				if (book.bookId == id) {
					readBooksVar.push(book);
				}
			}
		}
		setReadBooks(readBooksVar);
	}, [books]);
	console.log(readBooks);

	const getPath = (x, y, width, height) => {
		return `M${x},${y + height}C${x + width / 3},${y + height} ${
			x + width / 2
		},${y + height / 3}
${x + width / 2}, ${y}
C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
			x + width
		}, ${y + height}
Z`;
	};
	const TriangleBar = (props) => {
		const { fill, x, y, width, height } = props;

		return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
	};
	return (
<ResponsiveContainer width={'100%'}
			height={400}>
<BarChart
			
			data={readBooks}
			margin={{
				top: 20,
				right: 30,
				left: 20,
				bottom: 5,
			}}
		>
			<CartesianGrid strokeDasharray="3 3" />
			<XAxis dataKey="bookName" />
			<YAxis />
            <Tooltip></Tooltip>
			<Legend></Legend>
			<Bar
				dataKey="totalPages"
				fill="#8884d8"
				shape={<TriangleBar />}
				label={{ position: "top" }}
			>
				{readBooks.map((entry, index) => (
					<Cell key={`cell-${index}`} fill={colors[index % 20]} />
				))}
			</Bar>
		</BarChart>
</ResponsiveContainer>
	);
};

export default PagesToRead;
