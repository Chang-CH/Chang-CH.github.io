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

    return <Image src={imgSrc} />;
  };

  return ImageWithPrepend;
};

export default mdImage;
