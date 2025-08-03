"use client";

import {
  Box,
  Text,
  Heading,
  IconButton,
  Image,
  useBreakpointValue,
  HStack,
} from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { useState, useMemo, useRef } from "react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const properties = [
  "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=400",
];

export default function PropertiesCarousel() {
  const visibleCount = useBreakpointValue({ base: 1, sm: 2, md: 4 }) || 4;
  const scrollRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const cardWidth = 280;
  const gap = 24;

  const maxIndex = properties.length - visibleCount;

  const offsetX = useMemo(
    () => -(index * (cardWidth + gap)),
    [index, cardWidth, gap]
  );

  const prev = () => setIndex((prev) => Math.max(0, prev - 1));
  const next = () => setIndex((prev) => Math.min(maxIndex, prev + 1));

  return (
    <Box position="relative" py={16} px={8} overflow="hidden">
      <Box
        position="absolute"
        top={0}
        left={0}
        w="100%"
        textAlign="center"
        zIndex={0}
        opacity={0.05}
        fontSize="9xl"
        fontWeight="bold"
      >
        PROPERTY INVESTMENT
      </Box>

      <Box position="relative" zIndex={1}>
        <Heading textAlign="center" mb={6}>
          Showcasing The Best In Property Opportunities
        </Heading>
        <HStack justify="center" mb={6}>
          <IconButton
            aria-label="Left"
            icon={<ArrowBackIcon />}
            border={"1px solid #6B4437"}
            color={"#6B4437"}
            backgroundColor={"white"}
            borderRadius={"50%"}
            onClick={prev}
            isDisabled={index === 0}
          />
          <IconButton
            aria-label="Right"
            icon={<ArrowForwardIcon />}
            border={"1px solid #6B4437"}
            color={"#6B4437"}
            backgroundColor={"white"}
            borderRadius={"50%"}
            onClick={next}
            isDisabled={index === maxIndex}
          />
        </HStack>

        <Box
          overflow="hidden"
          px={4}
          ref={scrollRef}
          css={{ WebkitOverflowScrolling: "touch" }}
        >
          <MotionBox
            display="flex"
            gap={`${gap}px`}
            animate={{ x: offsetX }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            minWidth="fit-content"
          >
            {properties.map((src, i) => (
              <Box
                key={i}
                minW={`${cardWidth}px`}
                maxW={`${cardWidth}px`}
                borderRadius="lg"
                overflow="hidden"
                boxShadow="md"
                bg="white"
                paddingTop={i % 2 == 0 ? "0" : "50px"}
              >
                <Image
                  src={src}
                  alt={`property-${i}`}
                  w="100%"
                  h="200px"
                  objectFit="cover"
                />
                <Text textAlign="center" py={2} fontWeight="medium">
                  Property {i + 1}
                </Text>
              </Box>
            ))}
          </MotionBox>
        </Box>
      </Box>
    </Box>
  );
}
