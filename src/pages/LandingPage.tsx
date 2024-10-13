import React from 'react';
import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  return (
    <Box minH="calc(100vh - 60px)">
      <Container maxW="container.xl" pt={20}>
        <VStack spacing={8} textAlign="center">
          <Heading as="h1" size="2xl">
            Welcome to LocalTrade
          </Heading>
          <Text fontSize="xl">
            Your community marketplace for secure and easy cryptocurrency trading.
          </Text>
          <Button as={Link} to="/onboarding" colorScheme="blue" size="lg">
            Get Started
          </Button>
        </VStack>
      </Container>
    </Box>
  );
};

export default LandingPage;