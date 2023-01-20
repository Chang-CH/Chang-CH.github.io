import {
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Portal,
} from '@chakra-ui/react';

export default function Detail(props: { children?: React.ReactNode; title?: string; content?: React.ReactNode }) {
  return (
    <Popover trigger="hover">
      <PopoverTrigger>{props.children}</PopoverTrigger>
      <Portal>
        <PopoverContent>
          <PopoverArrow />
          {props.title ? <PopoverHeader>{props.title}</PopoverHeader> : null}
          <PopoverCloseButton />
          <PopoverBody>{props.content}</PopoverBody>
          {/* <PopoverFooter>This is the footer</PopoverFooter> */}
        </PopoverContent>
      </Portal>
    </Popover>
  );
}
