import React from 'react';
import './About.css';
import hero from '../../../assets/portfolio-profile-pic.png';
import CardMedia from "@mui/material/CardMedia";

export default function About() {
    return (
        <>
          <div className='image-container'>
            <CardMedia
              component='img'
              className='color-img'
              style={{
                height: 'auto',
                width: '50%',
                margin: '0 auto',
                paddingTop: '20px',
              }}
              image={hero}
              alt='About Me'
            />
          </div>

          <div style={{width: '70%', margin: '0 auto' }}>
            <h1 id='about-me-title'>About Me</h1>
            <p id='about-me-paragraph'>
                Hello! I am a full stack software developer and data scientist based in Oakland, California.  
                I have a broad range of technical skills and nearly 10 years experience working in the tech industry.
                Please check out my portfolio of projects and connect with me on LinkedIn, Github, or via Email! 
            </p>
          </div>
        </>
    );
}