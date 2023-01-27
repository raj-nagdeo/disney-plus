import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from 'styled-components';
function ImgSlider() {

    let settings={
        dots:true,
        infinite:true,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true
    }
  return (
    <Carousel {...settings} >
        <Wrap>
             <img src='images/slider-badging.jpg' />
             
         </Wrap>
         <Wrap>
             <img src='images/slider-badag.jpg' />
         </Wrap>
         {/* <Wrap>
             <img src='images/slider-badbatch.jpg' />
             <p>The bad batch must find their way across the galaxy</p>
         </Wrap> */}
    </Carousel>
  )
}


export default ImgSlider;

const Carousel=styled(Slider)`
    margin-top : 20px;

    .slick-prev {
      
        left: 25px;
        z-index: 1;
      }
      
      .slick-next {
        
        right: 25px;
        z-index: 1;
      }

    ul li button{
        &:before{
            font-size:10px;
            color:rgb(150,158,171);
        }
    }

    li.slick-active button::before{
        color:white;
    }

    .slick-list{
    
    overflow-x:hidden;
   }
`;

const Wrap=styled.div`
     img{
        border:4px solid transparent;
         border-radius : 4px;
         width : 100%;
         height : 100%;
         box-shadow : rgb(0 0 0 / 69%) 0px 26px 30px -10px,rgb(0 0 0 / 73% ) 0px 16px 10px -10px;
          transition-duration:300ms;
         &:hover{
          border:3px solid rgb(249,249,249);
         }
     }
    
`;

