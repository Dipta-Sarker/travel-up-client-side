import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { contexApi } from '../../AuthContex/AuthContex';

const Header = () => {

  const { user,logOut } = useContext(contexApi)

const handleSignOut = () =>{
  logOut()
  .then()
  .catch(e =>console.log(e))
}

  return (
    <div className="navbar text-white px-6 bg-primary-focus">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Home</a></li>
            <li tabIndex={0}>
              <a className="justify-between">
                Parent
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
              </a>

            </li>
            <li><a>Item 3</a></li>
          </ul>
        </div>
        <Link to='/'><a className="btn btn-ghost normal-case text-xl">TRAVEL-UP</a>
        </Link>   </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <Link to='/'><li><a>Home</a></li></Link>
          <Link to='/blog'><li><a>blog</a></li></Link>

          {user?.email ?
            <>
              <Link to='/myreviews'><li><a>My Reviews</a></li></Link>
              <Link to='/addreview'><li><a>Add Review</a></li></Link>
              <button onClick={handleSignOut} className="btn btn-outline btn-secondary">SignOut</button>
            </>
            :
            <>
          <Link to='/register'><li><a>Register</a></li></Link>            
          <Link to='/login'><li><a>LogIn</a></li></Link>            
            </>
          }


        </ul>
      </div>
      <div className="navbar-end">
        <p>{user?.email}</p>
      </div>
    </div>
  );
};

export default Header;