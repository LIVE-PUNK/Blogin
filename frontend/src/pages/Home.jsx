import React, { useEffect, useRef } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Blogs from '../components/Blogs'
import Footer from '../components/Footer'
import { useLocation, useNavigate } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const blogsRef = useRef(null);

  useEffect(() => {
    if (location.state?.scrollToBlogs && blogsRef.current) {
      blogsRef.current.scrollIntoView({ behavior: 'smooth' });
      // Clear the scrollToBlogs state after scrolling
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate]);

  return (
    <>
      <Navbar/>
      <Hero/>
      <div ref={blogsRef}>
        <Blogs/>
      </div>
      <Footer/>
    </>
  )
}

export default Home