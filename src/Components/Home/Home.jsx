import HomeBanner from "./HomeBanner";
import BooksSection from "./BooksSection/BooksSection";
import { useEffect, useState } from "react";

const Home = () => {
    const [books,setBooks] = useState([]);
    useEffect(()=>{
    fetch('books.json')
    .then(res => res.json())
    .then(data => setBooks(data))
    },[]);
    return (
        <div>
            <HomeBanner></HomeBanner>
            <BooksSection books={books}></BooksSection> 
        </div>
    );
};

export default Home;