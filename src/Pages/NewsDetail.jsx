import { useParams } from 'react-router-dom'
import RightSideNav from './Shared/RightSideNav';
import Header from './Shared/Header';
import Navbar from './Shared/Navbar';

const NewsDetail = () => {
    const {id}=useParams()
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className='grid grid-cols-1 lg:grid-cols-3'>
                <div className='col-span-2' >
                   <h2>Dragon News</h2> 
                </div>
                  <div className=""><RightSideNav></RightSideNav></div>
            </div>
        </div>
    );
};

export default NewsDetail;