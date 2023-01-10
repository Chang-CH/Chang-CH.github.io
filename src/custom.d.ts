/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />
declare module 'envConfig';

declare module '*.mdx' {
  let MDXComponent: (props: Record<string, unknown>) => JSX.Element;
  export default MDXComponent;
}

declare module '*.md' {
  let MDXComponent: (props: Record<string, unknown>) => JSX.Element;
  export default MDXComponent;
}
