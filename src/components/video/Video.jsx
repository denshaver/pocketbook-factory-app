
import React from 'react';
import style from './video.module.scss'
const VideoPlayer = () => {
  return (
    <div className={style.conviedo}>
      <video width="1360px" height="700px" controls>
        <source src="video.mp4" type="video/mp4" />
        Ваш браузер не поддерживает элемент video.
      </video>
    </div>
  );
}

export default VideoPlayer;