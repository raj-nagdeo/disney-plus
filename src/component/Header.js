import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './logo.svg';
import { selectUserName,selectUserPhoto } from '../features/user/userSlice';
import { useSelector } from 'react-redux';
import {auth,provider} from '../firebase';
import { signInWithPopup } from 'firebase/auth';
function Header() {

  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  const signIn = () => {
      signInWithPopup(auth,provider)
      .then((result)=>{
        console.log(result);
      })
  }

  return (
    <Nav>
      <Link to={"/"}> <Logo src="images/logo.svg"  /></Link>
      { !userName ?
        <LoginContainer><Login onClick={signIn}>LOGIN</Login></LoginContainer>
         :
        <>
        <NavMenu >
        <a>       
          <img src='images/home-icon.svg' /> 
          <span>HOME</span>
        </a>
        <a>       
          <img src='images/search-icon.svg' /> 
          <span>SEARCH</span>
        </a>
        <a>       
          <img src='images/watchlist-icon.svg' /> 
          <span>WATCHLIST</span>
        </a>
        <a>       
          <img src='images/original-icon.svg' /> 
          <span>ORIGINALS</span>
        </a>
        <a>       
          <img src='images/movie-icon.svg' /> 
          <span>MOVIES</span>
        </a>
        <a>       
          <img src='images/series-icon.svg' /> 
          <span>SERIES</span>
        </a>
      </NavMenu>

      <UserImg src='images/user-picture.jpg' /></>
        
      
      }
        
      
      
    </Nav>
        
   
  )
}


export default Header;

const Nav=styled.nav`
    height:70px;
    background:#090b13;
    display:flex;
    text-align:center;
    padding:0 36px;
`;

const Logo=styled.img`
    width:80px;
    margin-top:19px;
`;

const Login=styled.div`
    border : 1px solid #f9f9f9;
    padding : 8px 16px;
    border-radius : 4px;
    height:40px;
   
   letter-spacing:1.5px;
   background-color:rgba(0,0,0,0.6);
  transition:all 0.2s ease 0s;
  cursor:pointer;

    &:hover{
      background-color:#f9f9f9;
      color:#000;
      border-color:transparent;
    }
   
`;

const LoginContainer=styled.div`
  margin-top:17px;
    flex:1;
    display:flex;
    justify-content:flex-end;
`;

const NavMenu=styled.div`
    display:flex;
    flex:1;
    margin-left:25px;
   
    align-items:center;
  a{
      display:flex;
      align-items:center;
      padding:0 12px;
      cursor:pointer;
    
    img{
      height:20px;
    }
    
    span{
      font-size:13px;
      letter-spacing:1.42px;
      position:relative;

      &:after{
          content:"";
          height:2px;
          background:white;
          position:absolute;
          left:0;
          right:0;
          bottom:-6px;
          opacity:0;
          transition: all 250ms cubic-bezier(0.25,0.46, 0.45, 0.94) 0s;
          transform-origin:left center;
          transform:scaleX(0);
      }

    }
    
    &:hover{
      span:after{
        transform:scaleX(1);
        opacity:1;
    }
      
    }
  }
`;

const UserImg=styled.img`
    width:48px;
    height:48px;
    border-radius:50%;
    cursor:pointer;
    margin-top:10px;
`;