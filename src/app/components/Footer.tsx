"use client";

import { Box, Flex, Text, Image, VStack, HStack, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionImage = motion(Image);

export default function Footer() {
  return (
    <Box bg={useColorModeValue("gray.200", "gray.700")} py={10} px={6}>
      <Flex direction={{ base: "column", md: "row" }} justify="space-between" align="center" gap={8}>
        <VStack align="start" spacing={2}>
          <Text fontSize="xl" fontWeight="bold">Get in Touch</Text>
          <Text>Email: contact@provest.com</Text>
          <Text>Phone: +1 (555) 123-4567</Text>
          <Text>Address: 123 Main Street, New York, NY</Text>
        </VStack>

        <MotionImage
          src="/images/footer-globe.png"
          alt="Rotating Globe"
          boxSize="100px"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        />
      </Flex>

      <Text textAlign="center" mt={10} fontSize="sm" color="gray.600">
        © {new Date().getFullYear()} Provest. All rights reserved.
      </Text>
    </Box>
  );
}