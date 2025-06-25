import React, { useState } from 'react';
import logo from "../images/logo.png"
import { Link, useNavigate } from 'react-router-dom';
import { api_base_url } from '../helper';

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    fetch(api_base_url + "/signUp", {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: username,
        name: name,
        email: email,
        password: pwd
      })
    }).then((res) => res.json()).then((data) => {
      if (data.success) {
        navigate("/login");
      }
      else {
        setError(data.msg)
      }
    })
  }

  return (
    <>
      <div className="con flex flex-col items-center justify-center h-screen bg-[#070707]">
        <div className="absolute top-0 w-full h-[70vh] z-0 overflow-hidden pointer-events-none transition-opacity duration-1000 ease-out opacity-100">
        <div
        className="w-[75vw] h-full rounded-b-[100%] absolute left-1/2 transform -translate-x-1/2"
        style={{
        background: 'radial-gradient(ellipse at top, rgba(147, 51, 234, 0.4), transparent 90%)',
        filter: 'blur(40px)',
        transition: 'opacity 1s ease-out, transform 1s ease-out',
        }}
        ></div>
    </div>
        <form onSubmit={submitForm} className='w-[26vw] min-h-[auto] bg-[#0f0e0e] rounded-2xl p-5 flex flex-col items-center'>
          <img className='-mt-3 w-[270px] h-[100px] object-cover' src={logo} alt="" />
          <div className='w-full'>

            <p className='text-[gray] text-[14px] mt-3'>Username</p>
            <div className="inputBox">
              <input onChange={(e) => { setUsername(e.target.value) }} value={username} type="text" placeholder='Username' required />
            </div>

            <p className='text-[gray] text-[14px] mt-3'>Name</p>
            <div className="inputBox">
              <input onChange={(e) => { setName(e.target.value) }} value={name} type="text" placeholder='Name' required />
            </div>

            <p className='text-[gray] text-[14px] mt-3'>Email</p>
            <div className="inputBox">
              <input onChange={(e) => { setEmail(e.target.value) }} value={email} type="email" placeholder='Email' required />
            </div>

            <p className='text-[gray] text-[14px] mt-3'>Password</p>
            <div className="inputBox">
              <input onChange={(e) => { setPwd(e.target.value) }} value={pwd} type="password" placeholder='Password' required />
            </div>

            <p className='text-[14px] text-[gray] mt-3'>Already have an account <Link to="/login" className='text-purple-600'>Login</Link></p>

            <p className='text-[14px] text-red-500 mt-1 mb-3'>{error}</p>
            <button className="btnNormal w-full">Sign Up</button>

          </div>
        </form>
      </div>
    </>
  )
}

export default SignUp