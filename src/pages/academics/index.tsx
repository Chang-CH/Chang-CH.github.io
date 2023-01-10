import { Suspense } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '_components/Spinner';
import { modules } from './docs';

const Academics = () => {
  const { id } = useParams();

  if (id && modules && modules[id]) {
    const directory = modules[id];
    const Content = directory?.content;

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
