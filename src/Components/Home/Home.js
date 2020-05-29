import React from 'react';
import './Home.css';
import Parallax from 'react-rellax';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <section>
        <img
          src={process.env.PUBLIC_URL + 'BG.png'}
          alt='background'
          className='background'
        />

        <Parallax speed={-5}>
          <img
            src={process.env.PUBLIC_URL + 'E.png'}
            alt='text'
            className='text'
          />
        </Parallax>
        <Parallax speed={2}>
          <img
            src={process.env.PUBLIC_URL + 'X.png'}
            alt='text'
            className='text'
          />
        </Parallax>
        <Parallax speed={-6}>
          <img
            src={process.env.PUBLIC_URL + 'P.png'}
            alt='text'
            className='text'
          />
        </Parallax>
        <Parallax speed={-3}>
          <img
            src={process.env.PUBLIC_URL + 'L.png'}
            alt='text'
            className='text'
          />
        </Parallax>
        <Parallax speed={-2}>
          <img
            src={process.env.PUBLIC_URL + 'O.png'}
            alt='text'
            className='text'
          />
        </Parallax>
        <Parallax speed={-8}>
          <img
            src={process.env.PUBLIC_URL + 'R.png'}
            alt='text'
            className='text'
          />
        </Parallax>

        <Parallax speed={2}>
          <img
            src={process.env.PUBLIC_URL + 'TopSmoke.png'}
            alt='top smoke'
            className='topSmoke'
          />
        </Parallax>

        <img
          src={process.env.PUBLIC_URL + 'Trees.png'}
          alt='trees'
          className='trees'
        />

        <img
          src={process.env.PUBLIC_URL + 'BottomSmoke.png'}
          alt='bottom smoke'
          className='bottomSmoke'
        />
      </section>

      <section className='buttomSection'>
        {/* <video preload='auto' autoplay muted loop>
          <source
            src='video.mp4'
            type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"'
          ></source>
        </video> */}
        <div className='video'>
          <iframe
            title='video'
            frameborder='0'
            scrolling='no'
            marginheight='0'
            marginwidth='0'
            width='100%'
            height='100%'
            type='text/html'
            src='https://www.youtube.com/embed/dapluVS0lgg?autoplay=1&mute=1&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com'
          ></iframe>
        </div>
        <div className='content' id='content'>
          <Link to='/login'>
            <h1>EXPLOR NOW</h1>
          </Link>
        </div>
      </section>
    </div>
  );
}
