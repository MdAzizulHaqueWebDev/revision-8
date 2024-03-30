/** @format */

import { createBrowserRouter } from "react-router-dom";
import RootComponent from "../Components/RootCompo/RootComponent";
import Home from "../Components/Home/Home";
import BookDetails from "../Components/BookDetails/BookDetails";
import ListedBooks from "../Components/ListedBooks/ListedBooks";
import PagesToRead from "../Components/PagesToRead/PagesToRead";
import ReadBooks from "../Components/ReadBooks/ReadBooks";
import WishlistBooks from "../Components/WishlistBooks/WishlistBooks";
import BestSellerBooks from "../Components/BestSellerBooks/BestSellerBooks";
import Faq from "../Components/FAQ/FAQ";
import ErrorPage from "../Components/Error/ErrorPage";
import SortPages from "../Components/SortPages/SortPages";
import ReadBooksDetails from "../Components/ReadBooksDetails/ReadBooksDetails";
import WishlistBookDetails from "../Components/WishlistBooks/WishlistBookDetails";

export const router = createBrowserRouter([
{
path: "/",
element: <RootComponent></RootComponent>,
errorElement: <ErrorPage></ErrorPage>,
children: [
{ path: "/", element: <Home></Home> },
{
path: "book/:id",
loader: () => fetch("books.json"),
element: <BookDetails></BookDetails>,
},

{
path: "listedBooks",
element: <ListedBooks></ListedBooks>,
children: [
{
path: "bookDetails/:id",
loader: () => fetch("books.json"),
element: <ReadBooksDetails></ReadBooksDetails>,
},
{
path: "pages",
loader: () => fetch("books.json"),
element: <SortPages></SortPages>,
},
{
path: "wishlistBook",
loader: () => fetch("books.json"),
element: <WishlistBooks></WishlistBooks>,
children: [
{
path: "wishBookDetails/:id",
loader: () => fetch("books.json"),
element: <WishlistBookDetails></WishlistBookDetails>,
},
],
},
{
index: true,
loader: () => fetch("/books.json"),
element: <ReadBooks></ReadBooks>,
},
],
},

{
path: "/pagestoread",
element: <PagesToRead></PagesToRead>,
loader: () => fetch("books.json"),
},
{
path: "/bestSellers",
loader: () => fetch("bestSellerBooks.json"),
element: <BestSellerBooks></BestSellerBooks>,
},
{ path: "/faq", element: <Faq></Faq> },
],
},
]);
