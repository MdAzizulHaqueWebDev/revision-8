import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
const ListedBooks = () => {
    const [tabIndex,setTabIndex] = useState(0);
    return (
        <section>
          <div className="h-20 rounded-xl  bg-gray-200">
            <h2 className="text-center p-5 text-4xl font-bold">Books</h2>
          </div>
<div className="text-center">
<details className="dropdown">
  <summary className="m-1 btn btn-success">Sort by</summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <li><Link to={'pages'}><a>Sort By Pages</a></Link></li>
  </ul>
</details>
</div>
          <div className="mt-5">
          <div className="flex overflow-x-auto overflow-y-hidden lg:justify-start justify-center flex-nowrap dark:bg-gray-100 dark:text-gray-800">
	<Link onClick={()=>setTabIndex(0)} rel="noopener noreferrer" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border border-b-0': 'border-b'} dark:border-gray-600 dark:text-gray-600`}>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
			<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
		</svg>
		<span>Read Book</span>
	</Link>
	<Link to={'wishlistBook'} onClick={()=>setTabIndex(1)} rel="noopener noreferrer" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border border-b-0': 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`} >
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
			<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
			<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
		</svg>
		<span>Wishlist books</span>
	</Link>
</div>
 </div>
 <div>
    <Outlet></Outlet>
 </div>
        </section>
    );
};

export default ListedBooks;