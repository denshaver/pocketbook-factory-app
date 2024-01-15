import videoEn from '../components/video/animation-en.mp4';
import videoEs from '../components/video/animation-es.mp4';
import videoIt from '../components/video/animation-it.mp4';
import videoUa from '../components/video/animation-ua.mp4';
import videoRu from '../components/video/animation-ru.mp4';
import videoDe from '../components/video/animation-de.mp4';
import videoCz from '../components/video/animation-cz.mp4';
import videoPl from '../components/video/animation-pl.mp4';

export const handleVideoLanguageChange = language => {
  switch (language) {
    case 'en': {
      return videoEn;
    }
    case 'es': {
      return videoEs;
    }
    case 'it': {
      return videoIt;
    }
    case 'ua': {
      return videoUa;
    }
    case 'ru': {
      return videoRu;
    }
    case 'de': {
      return videoDe;
    }
    case 'cz': {
      return videoCz;
    }
    case 'pl': {
      return videoPl;
    }
    default: {
      return videoEn;
    }
  }
};
