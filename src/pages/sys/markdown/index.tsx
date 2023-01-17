import React from 'react';
import { Directory } from '_markdown/types';

const summary: Directory = {
  url: 'summary',
  breadcrumbs: 'Summary',
  breadcrumbUrl: '/summary',
  content: React.lazy(() => import('./files/summary/notes.mdx')),
};

const network: Directory = {
  url: 'network',
  breadcrumbs: 'Network',
  breadcrumbUrl: '/network',
  content: React.lazy(() => import('./files/network/notes.mdx')),
};

export const directories: { [directory: string]: Directory } = {
  summary: summary,
  network: network,
};

export const baseUrl = import.meta.url;
