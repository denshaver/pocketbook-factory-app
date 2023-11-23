import videoEn from '../components/video/animation-en.mp4';
import videoEs from '../components/video/animation-es.mp4';
import videoIt from '../components/video/animation-it.mp4';

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
    default: {
      return videoEn;
    }
  }
};
