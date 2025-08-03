"use client";

import { Box, Flex, Text, Image, VStack, HStack, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import FlipCard from "./common/FlipCard";

const MotionImage = motion(Image);

export default function Footer() {
  return (
    <Box bg={useColorModeValue("gray.200", "gray.700")} py={10} px={6} fontSize={'24px'}>
      <Flex direction={{ base: "column", md: "row" }} justify="space-between" align="center" gap={8}>
        <VStack align="start" spacing={2}>
          <Text fontSize="xl" fontWeight="bold">Get in Touch</Text>
          <Text>Email: contact@provest.com</Text>
          <Text>Phone: +91 123-4567</Text>
          <Text>Address: 123 Main Street, New Delhi, DL</Text>
        </VStack>

        <FlipCard />
      </Flex>

      <Text textAlign="center" mt={10} color="#1B1B1B">
        © {new Date().getFullYear()} Provest. All rights reserved.
      </Text>
    </Box>
  );
}