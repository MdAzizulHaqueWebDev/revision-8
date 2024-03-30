import { BsCalendar2Date } from "react-icons/bs";
import { IoMdContacts } from "react-icons/io";
import { RiPagesLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const SortPage = ({book}) => {
    const {
		author,
		bookName,
		category,
		image,
		rating,
		tags,
		publisher,
		totalPages,
		yearOfPublishing,
	} = book;
    return (
        <div className="border-4 rounded-2xl p-4 my-5">
          <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure className="w-[30%] "><img  className="h-[30%]p-3" src={image} alt="Image"/></figure>
  <div className=" w-[70%] my-auto">
    <section className="card-body space-y-5">
    <h2 className="card-title">{bookName}</h2>
    <p>by:{author}</p>
    <div className="flex  items-center gap-5">
        <div>Tag:{tags.map((tag,ix) => <span className="p-1 bg-slate-100 rounded-xl text-green-300" key={ix}>{tag}</span>)} </div>
        <div className="flex items-center gap-2"><BsCalendar2Date></BsCalendar2Date> Year of Publishing: <p className="font-bold">{yearOfPublishing}</p> </div>
    </div>
  <div className="flex items-center">
  <p className="flex items-center gap-1"><IoMdContacts></IoMdContacts>Publisher : {publisher} </p>
  <p className="flex items-center gap-1"><RiPagesLine></RiPagesLine>Pages : {totalPages} </p>
  </div> <hr />
  <div>
    <span className="p-2 mr-2 text-[#328EFF] rounded-full bg-[#328EFF26]">Category:{category} </span>
    <span className="p-2 mr-2 text-[#328EFF] rounded-full bg-[#FFAC3326]">Rating:{rating} </span>
   <Link to={'bookDetails'}> <button className="p-2 text-[#FFFFFF] rounded-full bg-[#23BE0A]">View Details</button></Link>
  </div>
    </section>
  </div>
</div>
        </div>
    );
};

export default SortPage;