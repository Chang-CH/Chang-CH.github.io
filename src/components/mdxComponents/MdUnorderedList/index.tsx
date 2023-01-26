import { UnorderedList } from '@chakra-ui/react';

export default function MdUnorderedList(props: { children?: React.ReactNode }) {
  return <UnorderedList>{props?.children}</UnorderedList>;
}
