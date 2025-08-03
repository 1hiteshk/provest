"use client";

import { Box, Text } from "@chakra-ui/react";
import { useState } from "react";

interface FlipCardProps {
  frontText?: string;
  backText?: string;
}

export default function FlipCard({
  frontText = "Front Side",
  backText = "Back Side",
}: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => setFlipped((prev) => !prev);

  return (
    <Box
      onClick={handleFlip}
      w="300px"
      h="200px"
      //  perspective="1000px"
      cursor="pointer"
      style={{ perspective: "1000px" }}
    >
      <Box
        position="relative"
        w="full"
        h="full"
        // transformStyle="preserve-3d"
        transition="transform 0.6s ease-in-out"
        transform={flipped ? "rotateY(180deg)" : "rotateY(0deg)"}
        bg={flipped ? "purple.500" : "blue.500"}
        borderRadius="xl"
        boxShadow="lg"
        style={{ transformStyle: "preserve-3d" }}
      >
        <Box
          position="absolute"
          w="full"
          h="full"
          display="flex"
          alignItems="center"
          justifyContent="center"
          // backfaceVisibility="hidden"
          color="white"
          fontSize="lg"
          fontWeight="semibold"
          borderRadius="xl"
          style={{ backfaceVisibility: "hidden" }}
          backgroundImage={"url('https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=400')"}
        >
          {frontText}
        </Box>

        <Box
          position="absolute"
          w="full"
          h="full"
          display="flex"
          alignItems="center"
          justifyContent="center"
          //  backfaceVisibility="hidden"
          color="white"
          fontSize="lg"
          fontWeight="semibold"
          borderRadius="xl"
          transform="rotateY(180deg)"
          style={{ backfaceVisibility: "hidden" }}
            backgroundImage={"url('https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400')"}
        >
          {backText}
        </Box>
      </Box>
    </Box>
  );
}
