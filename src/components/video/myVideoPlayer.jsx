import style from './videoStyle.module.scss'
import React from 'react';
import { Player, ControlBar, BigPlayButton } from 'video-react';
import 'video-react/dist/video-react.css';

// import video from './animation.mp4'


 const  MyVideoPlayer = () => {
  return (
   

    <Player autoPlay className={style.aspectvideo}>
      
        <BigPlayButton position="center" />
      <ControlBar autoHide={false}/>
    </Player>

    
  );
};

export default MyVideoPlayer;