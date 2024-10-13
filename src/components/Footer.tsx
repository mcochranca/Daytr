import React from 'react';
import { Box, Container, Stack, Text, Link } from '@chakra-ui/react';

const Footer: React.FC = () => {
  return (
    <Box bg="gray.50" color="gray.700" as="footer" py={4}>
      <Container maxW="6xl">
        <Stack direction={{ base: 'column', md: 'row' }} spacing={4} justify="space-between" align="center">
          <Text>© 2023 LocalTrade. All rights reserved</Text>
          <Stack direction="row" spacing={6}>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Use</Link>
            <Link href="#">Contact Us</Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;