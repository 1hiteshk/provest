"use client";

import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

const tags = [
  "Modern Living Spaces",
  "Family Homes",
  "Commercial Offices",
  "Retail Properties",
  "High ROI",
  "Trusted Advisors",
  "Secure Investment",
  "Sustainable Design",
];

const MotionBox = motion(Box);

export default function TagsScroll() {
     const bg = useColorModeValue("gray.100", "gray.700");
  const textColor = useColorModeValue("gray.700", "gray.300");
  return (
    <Box overflow="hidden" py={8} bg={bg}> 
      <MotionBox
        display="flex"
        animate={{ x: ["100%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        whiteSpace="nowrap"
      >
        {tags.map((tag, index) => (
          <Text
            key={index}
            mx={8}
            fontSize="lg"
            fontWeight="medium"
            color={textColor}
          >
            {tag}
          </Text>
        ))}
      </MotionBox>
    </Box>
  );
}
