import { Code } from '@chakra-ui/react';

export default function InlineCode(props: { children?: React.ReactNode }) {
  // return (
  //   <span
  //     style={{
  //       backgroundColor: 'lightgray',
  //       paddingInline: '5px',
  //       borderRadius: '5px',
  //       fontFamily: 'courier new',
  //       color: 'purple',
  //       fontWeight: 'bold',
  //       fontSize: 'small',
  //     }}
  //   >
  //     {props?.children}
  //   </span>
  // );
  return <Code colorScheme="orange">{props?.children}</Code>;
}
