import { Box, Button, Flex, Text, useColorMode } from '@chakra-ui/react';
import styles from './s.module.scss';
import { ReactComponent as Logo } from '_assets/Logo2Dark.svg';
import { Link } from 'react-router-dom';
import { MdBuildCircle, MdDarkMode, MdLightMode } from 'react-icons/md';
import { AiOutlineGithub } from 'react-icons/ai';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Flex className={styles.divNavbar} bg="black" color="white" zIndex="2" width="800px" direction="row">
        <Link to="/" className={styles.linkHome}>
          <Button
            variant="ghost"
            border="none"
            _hover={{
              backgroundColor: '#ffa50033',
            }}
            leftIcon={<Logo width="1.5rem" height="1.5rem" />}
          >
            <Text>Chuan Hao</Text>
          </Button>
        </Link>
        <Link to="/projects">
          <Button
            variant="unstyled"
            border="none"
            _hover={{
              textDecorationLine: 'underline',
              color: 'orange',
            }}
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            marginInline="1ch"
          >
            <MdBuildCircle style={{ marginRight: '1px' }} />
            Projects
          </Button>
        </Link>
        <a href="https://github.com/Chang-CH/Chang-CH.github.io">
          <Button
            variant="unstyled"
            border="none"
            _hover={{
              textDecorationLine: 'underline',
              color: 'orange',
            }}
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            marginInline="1ch"
          >
            <AiOutlineGithub style={{ marginRight: '1px' }} />
            Source
          </Button>
        </a>
        <Button
          variant="ghost"
          _hover={{
            backgroundColor: '#ffa50033',
          }}
          onClick={toggleColorMode}
          border="none"
        >
          {colorMode === 'light' ? <MdDarkMode /> : <MdLightMode />}
        </Button>
      </Flex>
      {/* Spacer to prevent stuff from getting covered by navbar */}
      <Box bg="transparent" height="1.5rem" />
    </>
  );
};

export default Navbar;
