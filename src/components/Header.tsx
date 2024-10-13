import React from 'react';
import { Box, Flex, Heading, Button, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { user, logout } = useAuth();
  const bgColor = useColorModeValue('white', 'gray.800');

  return (
    <Box bg={bgColor} px={4} boxShadow="sm" position="fixed" top={0} left={0} right={0} zIndex={20}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Flex alignItems="center">
          <Button onClick={toggleSidebar} mr={4}>
            Menu
          </Button>
          <Heading as="h1" size="lg">
            <Link to="/">LocalTrade</Link>
          </Heading>
        </Flex>
        <Flex alignItems="center">
          <Button onClick={toggleColorMode} mr={4}>
            {colorMode === 'light' ? 'Dark' : 'Light'} Mode
          </Button>
          {user ? (
            <Button onClick={logout}>Logout</Button>
          ) : (
            <Link to="/onboarding">
              <Button colorScheme="blue">Sign Up / Login</Button>
            </Link>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;