import { FcGoogle } from "react-icons/fc";
import qzone1 from '../../assets/qZone1.png'
import qzone2 from '../../assets/qZone2.png'
import qzone3 from '../../assets/qZone3.png'
import bg from '../../assets/bg.png'
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
const RightSideNav = () => {
  return (
    <div>
      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-3xl font-bold">Login With</h2>
        <button className="btn w-full btn-outline">
          <FcGoogle />
          Login with Google
        </button>
        <button className="btn w-full btn-outline">
          <FaGithub />
          Login with Github
        </button>
      </div>
      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-3xl font-bold">Find Us On</h2>
        <div className="border border-solid rounded-lg">
          <a
            className=" px-4 flex gap-3 text-lg items-center border-b "
            href=""
          >
            <FaFacebook></FaFacebook> <span>Facebook</span>
          </a>
          <hr />
          <a className="px-4 flex gap-3 text-lg items-center border-b " href="">
            <FaTwitter></FaTwitter> <span>Twitter</span>
          </a>
          <hr />
          <a className="px-4 flex gap-3 text-lg items-center" href="">
            <FaInstagram></FaInstagram>
            <span>Instagram</span>
          </a>
        </div>
      </div>
      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-3xl font-bold">Q-Zone</h2>
         <img src={qzone1} alt="" />
        <img src={qzone2} alt="" />
        <img src={qzone3} alt="" />
          </div>
          <div className={`p-4 text-center text-white justify-center  bg-no-repeat bg-cover bg-center rounded-lg`} 
              style={{ backgroundImage: `url(${bg})`}} >
              <h2>Create an Amazing Newspaper</h2>
              <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
              <button className="btn bg-red-500 text-white">Learn More</button>
          </div>
    </div>
  );
};

export default RightSideNav;
