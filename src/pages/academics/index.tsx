import { MDXProvider } from '@mdx-js/react';
import { Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { mdxComponents } from '_components/mdxComponents';
import Spinner from '_components/Spinner';
import { baseUrl, modules } from './docs';

import '_markdown/styles/s.module.scss';

const Academics = () => {
  const { id } = useParams();

  if (id && modules && modules[id]) {
    const directory = modules[id];
    const Content = directory?.content;

    return (
      <MDXProvider components={mdxComponents({ path: `mods/${id}`, url: baseUrl })}>
        <Suspense fallback={<Spinner />}>
          <Content />
        </Suspense>
      </MDXProvider>
    );
  }

  return (
    <>
      <h1>Academics</h1>
    </>
  );
};

export default Academics;
