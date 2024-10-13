import React from 'react';
import { Box, Container, Heading } from '@chakra-ui/react';

const Dashboard: React.FC = () => {
  return (
    <Box minH="calc(100vh - 60px)" py={8}>
      <Container maxW="container.xl">
        <Heading>Welcome to Your Dashboard</Heading>
        {/* Add dashboard content here */}
      </Container>
    </Box>
  );
};

export default Dashboard;