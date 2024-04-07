import BreakingNews from "./BreakingNews";
import LeftSideNav from "./LeftSideNav";
import NewsCard from "./NewsCard";
import Header from "./Shared/Header";
import Navbar from "./Shared/Navbar";
import RightSideNav from "./Shared/RightSideNav";
import {useLoaderData} from 'react-router-dom' 

const Home = () => {
    const news = useLoaderData();
    console.log(news)

    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="col-span-2">
                    {
                        news.map(aNews => <NewsCard key={aNews._id} news={aNews}></NewsCard>)
              }
                </div >
                <div className=""><RightSideNav></RightSideNav></div>
            </div>
        </div>
    );
};

export default Home;