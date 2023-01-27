import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import db from '../firebase';
import { collection, getDoc, getDocs, query } from 'firebase/firestore';
import { doc } from 'firebase/firestore';
import Header from './Header';
function Detail() {
    
    const { id }= useParams();
    const [movie,setMovie]=useState("")

     useEffect( ()=>{
        getDoc(doc(db, "movies", id)).then(docSnap => {
            if (docSnap.exists()) {
                setMovie(docSnap.data());
            } else {
              console.log("No such document!");
            }
          })
    },[])

  console.log("Movie is ",movie);

  return (
    <Container>
        <Background>
            <img src={movie.backgroundImg} />
        </Background>
        <ImageTitle>
            <img src={movie.titleImg} />
        </ImageTitle>
        <Controls>
            
            <PlayButton href='www.google.com'>
                <img src='images/play-icon-black.png'/>
                <span>PLAY</span>
            </PlayButton>
            <TrailerButton>
                <img src='images/play-icon-white.png'/>
                <span>TRAILER</span>
            </TrailerButton>
            <AddButton>
                <span>+</span>
            </AddButton>
            <GroupWatchButton>
                <img src='images/group-icon.png'/>


            </GroupWatchButton>
        </Controls>

        <Subtitle>
            {movie.subTitle}
        </Subtitle>

        <Description>
               {movie.description}
        </Description>    
    
    </Container>
  )
}

export default Detail;


const Container=styled.div`
    min-height:calc(100vh - 70px);
    padding:0 calc(3.5vw + 5px);
    position:relative;
`;


const Background=styled.div`
        position:fixed;
        top:0;
        left:0;
        bottom:0;
        right:0;
        z-index:-1;
        opacity:0.7;
        
        img{
            width:100%;
            height:100%;
            object-fit:cover;
        }
`;

const ImageTitle=styled.div`
            height:30vh;
            width:25vw;
            min-height:170px;
            min-width:200px;
            margin-top:20px;
            margin-bottom:15px;
            img{
                width:100%;
                height:100%;
                object-fit:contain;
            }

`;

const Controls=styled.div`
        
        display:flex;
        align-items:center;
`;

const PlayButton=styled.button`
        border-radius:4px;
        font-size:15px;
        display:flex;
        align-items:center;
        height:56px;
        background:rgb(249,249,249);
        border:none;
        padding: 0  24px;
        margin-right:22px;
        letter-spacing:1.8px;
        cursor:pointer;

        &:hover{
            background:rgb(198,198,198);
        }
`;

const TrailerButton=styled(PlayButton)`
        background:rgba(0,0,0,0.3);
        border:1px solidrgb(249,249,249);
        color:rgb(249,249,249);
`;

const AddButton=styled.button`
        width:44px;
        height:44px;
        display:flex;
        align-items:center;
        justify-content:center;
        border-radius:50%;
        border:2px solid white;
        background:rgba(0,0,0,0.6);
        cursor:pointer;
        margin-right:16px; 
        span{
            font-size:30px;
            color:white;    
        }
`;

const GroupWatchButton=styled(AddButton)`
        background:rgb(0,0,0);
`;

const Subtitle=styled.div`
        color:rgb(249,249,249);
        min-height: 20px;
        font-size: 15px;
        margin-top:26px;
`;

const Description=styled.div`

        line-height:1.4;
        font-size:20px;
        margin-top:16px;
        color:rgb(249,249,249);
        width: 400px;
        word-wrap: break-word;
`;