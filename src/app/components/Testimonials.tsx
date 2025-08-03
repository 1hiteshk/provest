"use client";

import { useState, useEffect } from "react";
import { Box, Text, Heading, Flex, IconButton } from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import Image from "next/image";

const testimonials = [
  {
    image: "/images/house1.jpg",
    text: "What sets this company apart is their deep understanding of the market and the personalized service they offer.",
    author: "Your Name",
  },
  {
    image: "/images/house2.jpg",
    text: "The detailed approach has allowed me to make informed decisions that paid off tremendously.",
    author: "Jane Doe",
  },
  {
    image: "/images/house3.jpg",
    text: "Highly professional team that guided me every step of the way.",
    author: "John Smith",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prev = () => setIndex((index - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((index + 1) % testimonials.length);

  return (
    <Box textAlign="center" py={20} px={4}>
      <Heading fontSize="2xl" mb={6}>Success Stories That Inspire Confidence.</Heading>
      <Box maxW="3xl" mx="auto">
        <Image height={40} width={100} src={testimonials[index].image} alt="testimonial" style={{ borderRadius: 12, width: "100%" }} />
        <Text mt={6} fontSize="lg" color="gray.600" minHeight={'60px'}>“{testimonials[index].text}”</Text>
        <Text mt={2} fontWeight="bold">{testimonials[index].author}</Text>
        <Flex justify="center" gap={4} mt={6}>
          <IconButton aria-label="Previous" icon={<ArrowBackIcon />} onClick={prev} />
          <IconButton aria-label="Next" icon={<ArrowForwardIcon />} onClick={next} />
        </Flex>
      </Box>
    </Box>
  );
}