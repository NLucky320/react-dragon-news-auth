
import Navbar from './Shared/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import { useContext } from 'react';

const Register = () => {
    const { createUser } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        // const email = e.target.email.value;
        // const password = e.target.password.value;
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
      const name = form.get('name');
      const photo = form.get('photo');
        const email = form.get('email');
       
        const password = form.get('password');
        console.log(name, photo, email, password)

        // create User
        createUser(email, password)
            .then(result => {
            console.log(result.user)
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
                    <h2 className="text-2xl text-center">Please Register</h2>
                </div>
                
                
                <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" placeholder="Your Name" name="name" className="input input-bordered" required />
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered"/>
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
                        <button className="btn btn-primary bg-black text-white">Register</button>
                    </div>
                </form>
                 <p className="text-center">Already have an account? Please <Link className="text-red-500 font-bold" to='/login'> Login</Link> </p>
            </div>
        </div>
    )
}

export default Register;