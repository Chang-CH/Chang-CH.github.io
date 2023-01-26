import { OrderedList, UnorderedList } from '@chakra-ui/react';
import CodeBlock from './CodeBlock';
import Details from './Details';
import InlineCode from './InlineCode';
import mdImage from './MdImage';

export const mdxComponents = ({ path = '', url = '' }: { path: string; url: string }) => {
  return {
    pre: CodeBlock,
    code: InlineCode,
    img: mdImage(path, url),
    Details: Details,
    ol: OrderedList,
    ul: UnorderedList,
  };
};
