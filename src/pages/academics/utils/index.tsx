import React from 'react';
import { Directory } from '_markdown/types';

export const parseDirectory = (
  directory: Directory,
  mapper: (directory: Directory) => React.ReactNode,
): React.ReactNode => {
  const Page: React.ReactNode = mapper(directory);

  if (!directory?.subdirectories) {
    return Page;
  }

  // @ts-ignore
  return <Page>{directory.subdirectories.map((dir: Directory) => parseDirectory(dir, mapper))}</Page>;
};
