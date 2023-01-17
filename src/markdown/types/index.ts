export type Directory = {
  url: string;
  breadcrumbs: string;
  breadcrumbUrl: string;
  content: React.FC<any> | React.LazyExoticComponent<() => JSX.Element>;
  subdirectories?: Array<Directory>;
};
