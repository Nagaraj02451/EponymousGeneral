import React, { useEffect, useState } from 'react'
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
import "../styles/SliderHome.css"
import {  useNavigate } from 'react-router-dom';

function SliderHome() {
  const [width ] =  useState(145)
  console.log(width , "jyjfug");
  const navigate = useNavigate();
  // const location = useLocation();
  const [keyword, setKeyword] = useState("")

  const searchHandler = (e) => {
      
      e.preventDefault();
      navigate(`/search/${keyword}`)

  }
  useEffect(() => {
    const swiper = new Swiper('.swiper', {
      slidesPerView: 3,
      centeredSlides: true,
      loop: true,
      spaceBetween: 100,   
    });

    // Optionally, you might need to update the swiper when the component is unmounted
    return () => {
      swiper.destroy(true, true);
    };
  }, []);

  return (
   <>
  <div className='maingud'>
  <div className="bk-slider">
  <div className="swiper">
    <div className="swiper-wrapper">
      <div className="swiper-slide" id='silder1'></div>
      <div className="swiper-slide" id='silder2'></div>
      <div className="swiper-slide" id='silder3'></div>
      <div className="swiper-slide" id='silder1'></div>
      <div className="swiper-slide" id='silder2'></div>
      <div className="swiper-slide" id='silder3'></div>
    </div>
    {/* <div className="swiper-button-next"></div>
    <div className="swiper-button-prev"></div> */}

  </div>

</div>
  </div>
<div className='search'>
  <h1>Fermentum aenean duis pellentesque dui. Fusce rutrum
    <br /> quis in vulputate. Porttitor faucibus id.</h1>
    <form onSubmit={searchHandler}>
    <div className='searchinput'>
      <input type='text' onChange={(e)=>{ setKeyword(e.target.value) }}
                value={keyword} placeholder='Search for Designer, Stylist, Footwear, Accessories' />
      <button id="search_btn" >search</button>
    </div>
    </form>
</div>
   </>
  )
}

export default SliderHome
