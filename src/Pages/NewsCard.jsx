import { Link } from "react-router-dom";

const NewsCard = ({news}) => {
console.log(news)

    return (
       <div className="card bg-base-100 shadow-xl mb-16">
  <figure><img src={news.image_url
} alt="Shoes" /></figure>
  <div className="card-body">
                <h2 className="card-title">{ news.title}</h2>
                {
                news.details.length>200 ? <p> {news.details.slice(0,200)} <Link to={`/news/${news._id}`} className="text-blue-600 font-bold"> Read More...</Link > </p>: <p> {news.details} </p>
                }
    <div className="card-actions justify-end">
    
    </div>
  </div>
</div>
    );
};

export default NewsCard;