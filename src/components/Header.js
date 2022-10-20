import React from 'react';
import styled from 'styled-components';
import heroImage from '../assets/headerhero.jpg';
import heroLinkedin from '../assets/icons/linkedinwhite.svg';
import heroGithub from '../assets/icons/githubwhite.svg';
import heroStackOverflow from '../assets/icons/stackwhite.svg';
import profileImage from '../assets/Linneaprofil.JPG';

export const HeaderContainer = styled.header`
  background-image: url(${heroImage});
  width: 100%;
  height: 500px;
  background-position: 50% 50%;
  background-size: cover;
  position: relative;
`;

export const HeaderIcons = styled.div`
  position: absolute;
  right: 10%;
  top: 8%;
  background-color: #0000002c;
  border-radius: 25px;
  
  img {  height: 50px;
         margin: 5px; }

  img:hover { filter: opacity(0.5); }

@media (min-width: 668px) and (max-width: 1023px){
    img{ height: 65px }
}

@media (min-width: 1024px){
  right: 15%;
  top: 10%;
  img { height: 75px; }
}  
}
`;

export const HeaderTitle = styled.div`
  position: absolute;
  top: 30%;
  left: 10%;
  color: black;
  padding: 10px;
  line-height: 30px;
  background-color: #00000040;
  border-radius: 20px;

  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    line-height: 130%;
    letter-spacing: 0.04em;
    color: #FFFFFF;
    padding-left: 10px;
    padding-right: 10px;
    margin: 5px;
  }

  h3 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 130%;
    letter-spacing: 0.04em;
    color: #FFFFFF;
    padding-left: 10px;
    display: inline;
  }

  @media (min-width: 668px) and (max-width: 1023px) {
    h3 {
      font-size: 25px;
    }

    h1 {
      font-size: 40px;
      display: block;
    }
  }

  @media (min-width: 1024px) {
    left: 15%;

    h3 {
      font-size: 30px;
    }

    h1 {
      font-size: 50px;
      display: inline;
    }
  }
`;
export const HeaderImage = styled.div`
  img {
    object-fit: cover;
    object-position: top center;
    border-radius: 50%;
    border: 4px solid white;
    width: 170px;
    height: 170px;
    position: absolute;
    bottom: -10%;
    right: 10%;
  }

  @media (min-width: 668px) and (max-width: 1023px) {
    img {
      width: 230px;
      height: 230px;
    }
  }

  @media (min-width: 1024px) {
    img {
      width: 240px;
      height: 240px;
      bottom: -15%;
      right: 15%;
    }
  }
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderIcons>
        <a href="https://google.com" target="_blank" rel="noreferrer">
          <img src={heroLinkedin} alt="LinkedIn icon for the header" />
        </a>
        <a href="https://google.com" target="_blank" rel="noreferrer">
          <img src={heroGithub} alt="Github icon for the header" />
        </a>
        <a href="https://google.com" target="_blank" rel="noreferrer">
          <img
            src={heroStackOverflow}
            alt="Stack Overflow icon for the header" />
        </a>
      </HeaderIcons>
      <HeaderTitle>
        <p>Portfolio: <b>Linnéa Wahlström</b> </p>
        <h3>Front-End</h3>
        <h3>Developer</h3>
      </HeaderTitle>
      <HeaderImage>
        <img src={profileImage} alt="Mrs Cakes" />
      </HeaderImage>
    </HeaderContainer>
  );
};