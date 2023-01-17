import { MDXProvider } from '@mdx-js/react';
import { Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { mdxComponents } from '_components/mdxComponents';
import Spinner from '_components/Spinner';

import '_markdown/styles/s.module.scss';
import { baseUrl, directories } from './markdown';

const SysDesign = () => {
  const { id } = useParams();

  if (id && directories && directories[id]) {
    const directory = directories[id];
    const Content = directory?.content;

    return (
      <MDXProvider components={mdxComponents({ path: `files/${id}`, url: baseUrl })}>
        <Suspense fallback={<Spinner />}>
          <Content />
        </Suspense>
      </MDXProvider>
    );
  }

  return (
    <>
      <h1>Notes</h1>
    </>
  );
};

export default SysDesign;
