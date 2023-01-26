import { OrderedList } from '@chakra-ui/react';

export default function MdOrderedList(props: { children?: React.ReactNode }) {
  return <OrderedList>{props?.children}</OrderedList>;
}
