import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { contexApi } from '../../AuthContex/AuthContex';

const Register = () => {

    const {createUser} = useContext(contexApi)

    const handleSignUp = (event) =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email,password)
        
        createUser(email,password)
        .then(result =>{
            const user = result.user;
            console.log(user)
            form.reset()
        })
        .catch(e => console.error(e))
    }


    return (
        <div className="hero-content flex-col bg-base-200 my-20">
            <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">SignUp now!</h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleSignUp} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Enter Your Name" className="input input-bordered" />
                    </div>
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
                            <p>Already Have An Account?<Link to='/login' className='text-green-500'>Please Login.</Link></p>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">SignUp</button>
                    </div>
            </form>
        </div>
  
</div >
 
    );
};

export default Register;