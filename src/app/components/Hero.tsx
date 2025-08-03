"use client";

import { Box, Text, Heading, Stack, Flex } from "@chakra-ui/react";
import StatCard from "./common/Stat";
import { base } from "framer-motion/client";
const stats = [
  { label: "Order's", value: "300+" },
  { label: "Client's", value: "12k" },
  { label: "Success", value: "98%" },
];

export default function Hero() {
  return (
    <Flex direction={{ base:'column', md:"row"}} width={'100%'} flexGrow={1} >
      <Flex direction={{ base:'row', md:"column"}} justify="center" p={8} gap={4} flex={1} alignItems={'center'} >
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            label={stat.label}
            value={stat.value}
            labelProps={{ fontSize: "16px", color: "#1B1B1B" }}
            valueProps={{
              fontSize: "27px",
              fontWeight: "semibold",
              color: "#6B4437",
            }}
          />
        ))}
      </Flex>
      <Flex width={'100%'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} gap={'20px'} p={8}>
        <Text
          padding={"10px 30px"}
          gap={"10px"}
          borderRadius={"100px"}
          backgroundColor={"#6B4437"}
          color={"white"}
          fontSize={'16px'}
        >
          PROPERTY INVESTMENT
        </Text>
         <Box textAlign="center" lineHeight="1.4">
      <Text fontSize={{ base:'48px' ,md:"96px"}}>
        <Text as="span" fontWeight="bold">
          Building
        </Text>{" "}
        <Text as="span">Wealth,</Text>
      </Text>
      <Text fontSize={{ base:'48px' ,md:"96px"}}>
        <Text as="span">One Property </Text>
        <Text as="span" fontWeight="bold">
          at a Time.
        </Text>
      </Text>
    </Box>
      </Flex>
    </Flex>
  );
}
