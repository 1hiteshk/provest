"use client";

import { Box, Text, Heading, IconButton, HStack, Image, useBreakpointValue } from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const properties = [
  "/images/property1.jpg",
  "/images/property2.jpg",
  "/images/property3.jpg",
  "/images/property4.jpg",
  "/images/property5.jpg",
  "/images/property6.jpg",
  "/images/property7.jpg",
  "/images/property8.jpg",
  "/images/property9.jpg",
  "/images/property10.jpg",
];

export default function PropertiesCarousel() {
  const [start, setStart] = useState(0);
  const visibleCount = useBreakpointValue({ base: 1, sm: 2, md: 4 }) || 4;

  const prev = () => setStart(Math.max(0, start - visibleCount));
  const next = () => setStart(Math.min(properties.length - visibleCount, start + visibleCount));

  return (
    <Box position="relative" py={16} overflow="hidden">
      <Box position="absolute" top={0} left={0} w="100%" textAlign="center" zIndex={0} opacity={0.05} fontSize="9xl" fontWeight="bold">
        PROPERTY INVESTMENT
      </Box>
      <Box position="relative" zIndex={1}>
        <Heading textAlign="center" mb={6}>Showcasing The Best In Property Opportunities</Heading>
        <HStack justify="center" mb={6}>
          <IconButton aria-label="Left" icon={<ArrowBackIcon />} onClick={prev} />
          <IconButton aria-label="Right" icon={<ArrowForwardIcon />} onClick={next} />
        </HStack>
        <HStack spacing={6} justify="center" flexWrap="nowrap" overflowX="auto" px={4}>
          {properties.slice(start, start + visibleCount).map((src, i) => (
            <Box key={i} minW="240px" maxW="sm" borderRadius="lg" overflow="hidden" boxShadow="md">
              <Image src={src} alt={`property-${i}`} w="100%" h="200px" objectFit="cover" />
              <Text textAlign="center" py={2} fontWeight="medium">Property {start + i + 1}</Text>
            </Box>
          ))}
        </HStack>
      </Box>
    </Box>
  );
}
