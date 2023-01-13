import CodeBlock from './CodeBlock';
import InlineCode from './InlineCode';
import mdImage from './MdImage';

export const mdxComponents = ({ path = '', url = '' }: { path: string; url: string }) => {
  return {
    pre: CodeBlock,
    code: InlineCode,
    img: mdImage(path, url),
  };
};
