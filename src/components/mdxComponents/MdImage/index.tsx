import { Image } from '@chakra-ui/react';
import React from 'react';

interface PropType {
  children?: React.ReactNode;
  src?: string;
}

const mdImage: (prepend: string, url: string) => React.FC<PropType> = (prepend, url) => {
  const ImageWithPrepend = (props: PropType) => {
    if (!props?.src) {
      return null;
    }
    const imgSrc = new URL(`${prepend}/${props.src}`, url).href;

    const ghUrl = `https://chang-ch.github.io/${imgSrc}`;

    // App deployed on netlify by assets are not copied over to netlify, so fetch from github instead
    // TODO: Consider copying assets over in future?
    return <Image src={import.meta.env.DEV ? imgSrc : ghUrl} />;
  };

  return ImageWithPrepend;
};

export default mdImage;
