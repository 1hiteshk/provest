"use client";

import { Box, Text, Heading, Stack } from "@chakra-ui/react";

export default function Hero() {
  return (
    <Box textAlign="center" pt={40} pb={20} px={6}>
      <Heading fontSize={{ base: "3xl", md: "5xl" }} fontWeight="bold">
        Building Wealth,
        <br />
        <Text as="span" color="teal.400">One Property at a Time.</Text>
      </Heading>
      <Text mt={4} fontSize={{ base: "md", md: "lg" }} color="gray.500">
        Discover luxury living spaces and curated investment properties.
      </Text>
    </Box>
  );
}