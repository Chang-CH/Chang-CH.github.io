import { Image } from '@chakra-ui/react';
import React from 'react';

interface PropType {
  children?: React.ReactNode;
  src?: string;
}

const mdImage: (prepend: string, url: string) => React.FC<PropType> = (prepend, url) => {
  const isDevelopmentMode = import.meta.env.DEV;

  const ImageWithPrepend = (props: PropType) => {
    if (!props?.src) {
      return null;
    }

    const imgSrc = new URL(`${prepend}/${props.src}`, url).href;

    if (!isDevelopmentMode) {
      return <Image src={imgSrc} />;
    }

    const match = imgSrc.match(/(?<=src\/).*/);

    if (!match) {
      return null;
    }

    // TODO: less hacky way to get assets from github
    const ghUrl = `https://raw.githubusercontent.com/Chang-CH/Chang-CH.github.io/main/src/${match[0]}`;

    return <Image src={ghUrl} />;
  };

  return ImageWithPrepend;
};

export default mdImage;
