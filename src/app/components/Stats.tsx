"use client";

import { Box, SimpleGrid, Stat, StatLabel, StatNumber, useColorModeValue } from "@chakra-ui/react";
import StatCard from "./common/Stat";

const stats = [
  { label: "Properties Sold", value: "3,421" },
  { label: "Happy Clients", value: "1,293" },
  { label: "Investments Managed", value: "$98M" },
  { label: "Team Members", value: "24" },
];

export default function Stats() {
  return (
    <Box py={20} px={16} bg={useColorModeValue("gray.50", "gray.800")}> 
      <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={10}>
       
        {stats.map((stat, index) => (
          <StatCard key={index} label={stat.label} value={stat.value} 
            labelProps={{ fontSize: "24px", color: "#1B1B1B" }}
            valueProps={{
              fontSize: { base: "60px", md: "100px" },
              fontWeight: "medium",
              color: "#6B4437",
            }}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}
