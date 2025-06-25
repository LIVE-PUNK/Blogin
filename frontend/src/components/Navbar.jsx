
// export default Navbar
import React from 'react';
import logo from "../images/logo.png" 
import { Link, useNavigate } from 'react-router-dom';


const Navbar = () => {
  const navigate = useNavigate();

  const handleBlogsClick = () => {
    navigate('/', { state: { scrollToBlogs: true } });
  };

  return (
    <>
      <div className="navbar flex items-center justify-between h-[100px] px-[100px] bg-[#0c0c0c] overflow-hidden">
        <div className="logo">
          <Link to="/">
            <img className='w-[240px]' src={logo} alt="" />
          </Link>
        </div>
        <div className="links flex items-center gap-[20px]">
          <Link to="/" className='navLink active'>Home</Link>
          <Link to="/about" className='navLink'>About</Link>
          <button className='navLink' onClick={handleBlogsClick}>Blogs</button>
          <button onClick={()=>{
            localStorage.removeItem("token");
            localStorage.removeItem("isLoggedIn");
            window.location.href = "/login";
          }} className="btnNormal !bg-purple-600">Logout</button>
        </div>
      </div>
    </>
  )
}

export default Navbar