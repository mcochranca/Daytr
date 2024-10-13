import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Select, Input, VStack, useToast } from '@chakra-ui/react';

const QuickTrade: React.FC = () => {
  const [asset, setAsset] = useState('');
  const [amount, setAmount] = useState('');
  const toast = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement trade logic here
    toast({
      title: 'Trade Executed',
      description: `Traded ${amount} ${asset}`,
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
    setAsset('');
    setAmount('');
  };

  return (
    <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl isRequired>
            <FormLabel>Asset</FormLabel>
            <Select placeholder="Select asset" value={asset} onChange={(e) => setAsset(e.target.value)}>
              <option value="BTC">Bitcoin</option>
              <option value="ETH">Ethereum</option>
              <option value="LTC">Litecoin</option>
            </Select>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Amount</FormLabel>
            <Input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
          </FormControl>
          <Button type="submit" colorScheme="blue" width="full">
            Execute Trade
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default QuickTrade;