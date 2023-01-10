import { Suspense } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '_components/Spinner';
import { modules } from './docs';

const Academics = () => {
  const { id } = useParams();

  if (id && id in modules) {
    const Content = modules[id]?.content;

    return (
      <Suspense fallback={<Spinner />}>
        <Content />
      </Suspense>
    );
  }

  return (
    <>
      <h1>Academics</h1>
    </>
  );
};

export default Academics;
