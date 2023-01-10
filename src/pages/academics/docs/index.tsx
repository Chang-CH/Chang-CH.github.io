import React from 'react';
import { Directory } from '../utils';

const cs1101s: Directory = {
  url: 'cs1101s',
  breadcrumbs: 'CS1101S',
  breadcrumbUrl: '/CS1101S',
  content: React.lazy(() => import('./mods/cs1101s/notes.mdx')),
};

const cs2030s: Directory = {
  url: 'cs2030s',
  breadcrumbs: 'CS2030S',
  breadcrumbUrl: '/CS2030S',
  content: React.lazy(() => import('./mods/cs2030s/notes.mdx')),
};

const cs2040s: Directory = {
  url: 'cs2040s',
  breadcrumbs: 'CS2040S',
  breadcrumbUrl: '/CS2040S',
  content: React.lazy(() => import('./mods/cs2040s/notes.md')),
};

// const cs2100: Directory = {
//   url: 'cs2100',
//   breadcrumbs: 'CS2100',
//   breadcrumbUrl: '/CS2100',
//   content: React.lazy(() => import('./mods/cs2100/notes.mdx')),
// };

// const cs2102: Directory = {
//   url: 'cs2102',
//   breadcrumbs: 'CS2102',
//   breadcrumbUrl: '/CS2102',
//   content: React.lazy(() => import('./mods/cs2102/notes.mdx')),
// };

const cs2103t: Directory = {
  url: 'cs2103t',
  breadcrumbs: 'CS2103T',
  breadcrumbUrl: '/CS2103T',
  content: React.lazy(() => import('./mods/cs2103t/notes.md')),
};

// const cs2105: Directory = {
//   url: 'cs2105',
//   breadcrumbs: 'CS2105',
//   breadcrumbUrl: '/CS2105',
//   content: React.lazy(() => import('./mods/cs2105/notes.mdx')),
// };

const cs2106: Directory = {
  url: 'cs2106',
  breadcrumbs: 'CS2106',
  breadcrumbUrl: '/CS2106',
  content: React.lazy(() => import('./mods/cs2106/notes.mdx')),
};

const cs2107: Directory = {
  url: 'cs2107',
  breadcrumbs: 'CS2107',
  breadcrumbUrl: '/CS2107',
  content: React.lazy(() => import('./mods/cs2107/notes.md')),
};

const cs3230: Directory = {
  url: 'cs3230',
  breadcrumbs: 'CS3230',
  breadcrumbUrl: '/CS3230',
  content: React.lazy(() => import('./mods/cs3230/notes.md')),
};

const cs3243: Directory = {
  url: 'cs3243',
  breadcrumbs: 'CS3243',
  breadcrumbUrl: '/CS3243',
  content: React.lazy(() => import('./mods/cs3243/notes.md')),
};

const cs4225: Directory = {
  url: 'cs4225',
  breadcrumbs: 'CS4225',
  breadcrumbUrl: '/CS4225',
  content: React.lazy(() => import('./mods/cs4225/notes.mdx')),
};

export const modules = {
  cs1101s: cs1101s,
  cs2030s: cs2030s,
  cs2040s: cs2040s,
  // cs2100,
  // cs2102,
  cs2103t: cs2103t,
  // cs2105,
  cs2106: cs2106,
  cs2107: cs2107,
  cs3230: cs3230,
  // cs3235,
  cs3243: cs3243,
  cs4225: cs4225,
};

// TODO: markdown images are broken due to mdx not passing file paths through webpack
const noteRoot: Directory = {
  url: 'notes',
  breadcrumbs: 'Notes',
  breadcrumbUrl: '/notes',
  content: () => (
    <div>
      <p>temp</p>
    </div>
  ),
  subdirectories: [
    cs1101s,
    cs2030s,
    cs2040s,
    // cs2100,
    // cs2102,
    cs2103t,
    // cs2105,
    cs2106,
    cs2107,
    cs3230,
    // cs3235,
    cs3243,
    cs4225,
  ],
};

// const routes = parseDirectory(noteRoot, (directory: Directory) => {
//   const Content = directory.content;
//   console.log(directory.url);

//   return (
//     <Route
//       path={directory.url}
//       element={
//         <Suspense fallback={<Spinner />}>
//           <Content />
//         </Suspense>
//       }
//     >
//       {props?.children}
//     </Route>
//   );
// });

// export default routes;
