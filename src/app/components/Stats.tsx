"use client";

import { Box, SimpleGrid, Stat, StatLabel, StatNumber, useColorModeValue } from "@chakra-ui/react";

const stats = [
  { label: "Properties Sold", value: "3,421" },
  { label: "Happy Clients", value: "1,293" },
  { label: "Investments Managed", value: "$98M" },
  { label: "Team Members", value: "24" },
];

export default function Stats() {
  return (
    <Box py={20} px={6} bg={useColorModeValue("gray.50", "gray.800")}> 
      <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={10}>
        {stats.map((stat, index) => (
          <Stat key={index} textAlign="center">
            <StatLabel fontSize="lg" color="gray.500">{stat.label}</StatLabel>
            <StatNumber fontSize="3xl" fontWeight="bold">{stat.value}</StatNumber>
          </Stat>
        ))}
      </SimpleGrid>
    </Box>
  );
}
