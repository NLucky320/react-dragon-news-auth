import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const Login = () => {
    const {signIn} = useContext(AuthContext)
    const location = useLocation();
    const navigate=useNavigate()
console.log(location)
    const handleLogin = e => {
        e.preventDefault();
        // const email = e.target.email.value;
        // const password = e.target.password.value;
        // console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        // console.log(form)
        // console.log(form.get('email'))
     
        const email = form.get('email');
       
        const password = form.get('password');
        console.log(email, password)
        signIn(email, password)
             .then(result => {
                 console.log(result.user)
                 //navigate after login
                navigate(location?.state? location.state :'/') 

            })
            .catch(error => {
            console.log(error)
        })  
    }
    return (
        <div>
            <Navbar></Navbar>
        
    <div className="card shrink-0 md:w-3/4 lg:w-1/2 mx-auto shadow-2xl bg-base-100">
                <div>
                    <h2 className="text-2xl text-center">Please Login</h2>
      </div>
                
                
                <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="Password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
                </form>
                <p className="text-center">Do not have an account? Please <Link className="text-red-500 font-bold" to='/register'> Register</Link> </p>
    </div>
  </div>

    );
};

export default Login;