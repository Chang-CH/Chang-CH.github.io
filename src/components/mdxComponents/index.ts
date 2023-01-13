import CodeBlock from './CodeBlock';
import InlineCode from './InlineCode';
import mdImage from './MdImage';

export const mdxComponents = ({ path = '' }: { path: string }) => {
  return {
    pre: CodeBlock,
    code: InlineCode,
    img: mdImage(path),
  };
};
