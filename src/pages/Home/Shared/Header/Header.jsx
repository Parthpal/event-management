import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../../provider/AuthProvider/AuthProvider';

const Header = () => {
  const {user,logOut}=useContext(AuthContext);
  const handleLogout=()=>{
    logOut()
    .then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }

    const links=<>
    <li><NavLink style={({ isActive }) =>
              isActive
                ? {
                  color: 'black',
                  background: '#fad66b',
                  fontWeight:'600'
                  }
                : { color: '#000' }
            } to="/">Home</NavLink></li>
    <li><NavLink style={({ isActive }) =>
              isActive
                ? {
                  color: 'black',
                  background: '#fad66b',
                  fontWeight:'600'
                  }
                : { color: '#000' }
            } to="/portfolio">Portfolio</NavLink></li>
    <li><NavLink style={({ isActive }) =>
              isActive
                ? {
                  color: 'black',
                  background: '#fad66b',
                  fontWeight:'600'
                  }
                : { color: '#000' }
            } to="/lovenotes">Lovenotes</NavLink></li>
    <li><NavLink style={({ isActive }) =>
              isActive
                ? {
                  color: 'black',
                  background: '#fad66b',
                  fontWeight:'600'
                  }
                : { color: '#000' }
            } to="/login">Login</NavLink></li>
    <li><NavLink style={({ isActive }) =>
              isActive
                ? {
                    color: 'black',
                    background: '#fad66b',
                    fontWeight:'600'
                    
                  }
                : { color: '#000' }
            } to="/register">Registration</NavLink></li>

    </>

    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52">
        {
            links
        }
      </ul>
    </div>
    <a className="text-[#FF635C] normal-case font-bold text-xl">PH EVENT AGENCY</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        {links}
    </ul>
  </div>
  <div className="navbar-end">

       
      {
        user ?<>
           <p>{user.displayName}</p>
           
          <div>
              <img className="w-10 h-10 rounded-full border-2 border-white hidden md:block mx-2"  src={user.photoURL} />
          </div>
            
        <button className='btn' onClick={handleLogout}>Logout</button>
        </>:
        <Link to="/login">Login</Link>
      }
    
  </div>
</div>
        </div>
    );
};

export default Header;