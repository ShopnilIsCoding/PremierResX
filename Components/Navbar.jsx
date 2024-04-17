import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../src/Providers/AuthProvider";
import 'animate.css';
const Navbar = () => {

    const {user,logOut}=useContext(AuthContext);
    const handleSignOut=()=>
    {
      logOut() 
      .then()
      .catch()

    }
    return (
        <div className="sticky z-50 top-0 glass shadow-xl animate__animated animate__fadeIn">
            <div className="navbar ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><NavLink to={'/'}>Home</NavLink></li>
      {user? <></> : <li><NavLink to={'/register'}>Register</NavLink></li>}

      </ul>
    </div>
    <a className="btn btn-ghost text-xl text-2xl font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient">PremierResX</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li className="mr-2"><NavLink to={'/'} >Home</NavLink></li>
    {user? <></> : <li><NavLink to={'/register'}>Register</NavLink></li>}
    </ul>
  </div>
  <div className="navbar-end">
  {user && <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className=" avatar tooltip tooltip-bottom" data-tip={user.displayName}>
        <div className="w-10 rounded-full m-auto" >
          <img alt="Tailwind CSS Navbar component" src={user?.photoURL || "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li><a onClick={handleSignOut}>Logout</a></li>
      </ul>
    </div>}
    <div>
        {user?<></>: <Link to={'/login'}><button className="btn btn-outline btn-primary">Log in</button></Link>}
    </div>
  </div>
</div>
        </div>
    );
};

export default Navbar;