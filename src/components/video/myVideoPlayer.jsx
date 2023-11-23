import i18n from 'i18n';
import React, { useEffect, useState } from 'react';
import { Player, ControlBar, BigPlayButton } from 'video-react';

import style from './videoStyle.module.scss';
import 'video-react/dist/video-react.css';
import { handleVideoLanguageChange } from 'utils/lngVideoChange';

import videoEn from './animation-en.mp4';

const MyVideoPlayer = () => {
  const [video, setVideo] = useState(videoEn);

  useEffect(() => {
    setVideo(handleVideoLanguageChange(i18n.language));
  }, [i18n.language]);

  return (
    <Player src={video} className={style.aspectvideo}>
      <BigPlayButton position="center" />
      <ControlBar autoHide={false} />
    </Player>
  );
};

export default MyVideoPlayer;
