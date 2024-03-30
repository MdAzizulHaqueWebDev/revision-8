import { Link } from "react-router-dom";

const HomeBanner = () => {
    return (
        <div>
            <div className="hero rounded-3xl p-5 gap-6 bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://i.postimg.cc/Wz3TKsZL/Mindset.jpg" className="max-w-xl rounded-lg shadow-2xl" />
    <div className="space-y-3 text-center lg:text-start">
      <h1 className="text-xl lg:text-5xl playfair w-[95%] font-bold">Books serve as portals to knowledge, offering insights into diverse cultures </h1>
      <Link to={'listedBooks'}><button  className="btn btn-success">View Lists</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default HomeBanner;