import React, { useState, useEffect } from 'react';
import { Box, Heading, VStack, Text } from '@chakra-ui/react';

interface Trade {
  id: number;
  asset: string;
  amount: number;
  price: number;
}

const LiveTrades: React.FC = () => {
  const [trades, setTrades] = useState<Trade[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newTrade: Trade = {
        id: Date.now(),
        asset: ['BTC', 'ETH', 'LTC'][Math.floor(Math.random() * 3)],
        amount: parseFloat((Math.random() * 10).toFixed(2)),
        price: parseFloat((Math.random() * 1000).toFixed(2)),
      };
      setTrades((prevTrades) => [newTrade, ...prevTrades.slice(0, 9)]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
      <Heading size="md" mb={4}>Live Trades</Heading>
      <VStack align="stretch" spacing={2}>
        {trades.map((trade) => (
          <Text key={trade.id}>
            {trade.asset}: {trade.amount} @ ${trade.price}
          </Text>
        ))}
      </VStack>
    </Box>
  );
};

export default LiveTrades;