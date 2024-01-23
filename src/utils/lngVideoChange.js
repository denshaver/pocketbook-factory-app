import videoDe from '../components/video/animation-de.mp4';

export const handleVideoLanguageChange = language => {
  switch (language) {
    case 'de': {
      return videoDe;
    }
    default: {
      return videoDe;
    }
  }
};
