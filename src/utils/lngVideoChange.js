import videoEn from '../components/video/animation-en.mp4';
import videoEs from '../components/video/animation-es.mp4';
import videoIt from '../components/video/animation-it.mp4';
import videoUa from '../components/video/animation-ua.mp4';
import videoRu from '../components/video/animation-ru.mp4';

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
    default: {
      return videoEn;
    }
  }
};
