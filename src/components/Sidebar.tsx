import React from 'react';
import { Box, VStack, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <Box
      position="fixed"
      left={0}
      top="60px"
      h="calc(100vh - 60px)"
      w="200px"
      bg="gray.100"
      transform={isOpen ? 'translateX(0)' : 'translateX(-100%)'}
      transition="transform 0.3s"
      zIndex={10}
    >
      <VStack spacing={4} align="stretch" p={4}>
        <Link as={RouterLink} to="/">Home</Link>
        <Link as={RouterLink} to="/dashboard">Dashboard</Link>
        <Link as={RouterLink} to="/market">Market</Link>
        <Link as={RouterLink} to="/wallet">Wallet</Link>
        <Link as={RouterLink} to="/settings">Settings</Link>
      </VStack>
    </Box>
  );
};

export default Sidebar;