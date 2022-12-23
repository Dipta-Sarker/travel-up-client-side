import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { contexApi } from '../../AuthContex/AuthContex';
import { FaGoogle } from "react-icons/fa";
import { Helmet } from 'react-helmet-async';

const Login = () => {

  const {loginUser,google} = useContext(contexApi)
let location = useLocation()
const navigate = useNavigate()
let from = location.state?.from?.pathname || "/";


    const handleLogin = (event) =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email,password)
        .then(result => {
          const user = result.user;
          navigate(from, { replace: true });
          console.log(user)
          form.reset()
        })
        .catch(e =>console.log(e)) 
        
    }

const  handleSigninGoogle = () =>{
  google()
  .then(result => {
    const user = result.user;
    console.log(user)
  })
  .catch(e => console.error(e))
}

    return (
        
  <div className="hero-content flex-col bg-base-200 my-20">
    <Helmet><title>Login</title></Helmet>
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" />
          <label className="label">
            <p>New to TravelUp?<Link to='/register' className='text-orange-500'>Create an account.</Link></p>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      <button onClick={handleSigninGoogle} className="btn btn-outline btn-success mt-5"><FaGoogle/> Google</button>
      </form>

    </div>
  
</div>
    );
};

export default Login;