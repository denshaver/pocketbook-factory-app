import i18n from 'i18n';
import React, { useEffect, useState } from 'react';
import { Player, ControlBar, BigPlayButton } from 'video-react';

import style from './videoStyle.module.scss';
import 'video-react/dist/video-react.css';
import { handleVideoLanguageChange } from 'utils/lngVideoChange';

import videoDe from './animation-de.mp4';

const MyVideoPlayer = () => {
  const [video, setVideo] = useState(videoDe);

  return (
    <Player src={video} className={style.aspectvideo}>
      <BigPlayButton position="center" />
      <ControlBar autoHide={false} />
    </Player>
  );
};

export default MyVideoPlayer;
