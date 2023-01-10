import React from 'react';

export type Directory = {
  url: string;
  breadcrumbs: string;
  breadcrumbUrl: string;
  content: React.FC<any> | React.LazyExoticComponent<() => JSX.Element>;
  subdirectories?: Array<Directory>;
};

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
