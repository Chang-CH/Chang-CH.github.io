import { Flex, useColorModeValue } from '@chakra-ui/react';
import Navbar from '_components/Navbar';
import styles from './s.module.scss';

type PageProps = { children: React.ReactNode };

const TextPage = ({ children }: PageProps) => {
  return (
    <Flex className={styles.root} direction="column" align="center" justify="center">
      <Navbar />
      <Flex
        padding="4rem"
        width="800px"
        height="100%"
        flex="1"
        align="baseline"
        justify="flex-start"
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      >
        {children}
      </Flex>
    </Flex>
  );
};

export default TextPage;
