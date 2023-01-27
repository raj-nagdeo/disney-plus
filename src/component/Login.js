import React from 'react';
import styled from 'styled-components';

function Login() {
  return (
    <Container>
        <CTA>  {/* Call to Action */}
            <CTALogoOne src="images/cta-logo-one.svg"/>
            <SignUp>
                GET ALL THERE
            </SignUp>
            <Description>
                Get DisneyPlus Hulu and espn at no additional cost and unlimited free access to all the movies Tv
            </Description>
            <CTALogoTwo src="images/cta-logo-two.png"/>
        </CTA>
    </Container>
  )
}

export default Login;


const Container=styled.div`
        position:relative;
        height: calc(100vh - 70px);
        display:flex;
        align-items:center;
        justify-content:center;

        &:before{
            background-position:top;
            background-size:cover;
            position:absolute;
            top:0;
            bottom:0;
            content:"";
            left:0;
            right:0;
            background: url("images/login-background.jpg") center center / cover no-repeat fixed;
            z-index:-1;
        }
`;


const CTA=styled.div`
            max-width:650px;
            padding: 80px 40px;
            width:80%;
            display:flex;
            flex-direction:column;
 `;

const CTALogoOne=styled.img`

`;

const SignUp=styled.a`
            width:100%;
            background-color:#0063ef;
            font-weight:bold;
            padding:17px 0px;
            color:#f9f9f9;
            border-radius:4px;
            text-align:center;
            cursor:pointer;
            font-size:18px;
            transition:all 250ms;
            letter-spacing:1.5px;
            margin-top:8px;
            margin-bottom:12px;
            
            &:hover{
                    background:#0483ee
            }
`;
const Description=styled.div`
                font-size:11px;
                letter-spacing:1.5px;
                text-align:center;
                line-height:1.5;
                margin-bottom:10px;

`;

const CTALogoTwo=styled.img`

`;