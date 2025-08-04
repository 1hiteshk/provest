"use client";

import { useState, useEffect, useRef } from "react";
import {
  Box,
  Text,
  Heading,
  Flex,
  IconButton,
  useMediaQuery,
} from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import Image from "next/image";
import Hero from "./Hero";

const testimonials = [
  {
    image: "/house1.jpg",
    text: "I trusted them with my first investment, and the returns exceeded my expectations.",
    author: "Sophia Greene",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    image: "/house2.jpg",
    text: "Exceptional service and market knowledge. I felt guided and informed every step of the way.",
    author: "Daniel Carter",
    avatar: "https://randomuser.me/api/portraits/men/36.jpg",
  },
  {
    image: "/house3.jpg",
    text: "Their expertise made all the difference. I’m now confident in growing my property portfolio.",
    author: "Amelia Stone",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    image: "/house4.jpg",
    text: "Transparent, professional, and highly reliable. Definitely recommended for new investors.",
    author: "Liam Patel",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    image: "/house5.jpg",
    text: "I love how they tailor strategies to individual goals. I’ve never felt more in control of my investments.",
    author: "Emily Hayes",
    avatar: "https://randomuser.me/api/portraits/women/30.jpg",
  },
  {
    image: "/house6.jpg",
    text: "The team helped me identify the right property at the right time. It was a game changer.",
    author: "Noah Jensen",
    avatar: "https://randomuser.me/api/portraits/men/48.jpg",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [isMobile] = useMediaQuery("(max-width: 480px)");
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
  };

  const resetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    startInterval();
  };

  useEffect(() => {
    startInterval();
    return () => clearInterval(intervalRef.current!);
  }, []);

  const prev = () => {
    setIndex((index - 1 + testimonials.length) % testimonials.length);
    resetInterval();
  };

  const next = () => {
    setIndex((index + 1) % testimonials.length);
    resetInterval();
  };

  return (
    <Box textAlign="center" py={20} px={4}>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        direction={{ base: "column", md: "row" }}
      >
        <Hero />
        <Flex
          justify="center"
          direction={{ base: "row", md: "column" }}
          gap={4}
          mt={6}
          fontSize="17px"
        >
          <IconButton
            aria-label="Previous"
            border="2px solid #6B4437"
            color="#6B4437"
            backgroundColor="white"
            borderRadius="50%"
            icon={<ArrowBackIcon />}
            onClick={prev}
          />
          <Text>01</Text>
          <Text>/ {index + 1} /</Text>
          <Text>06</Text>
          <IconButton
            aria-label="Next"
            border="2px solid #6B4437"
            color="#6B4437"
            borderRadius="50%"
            backgroundColor="white"
            icon={<ArrowForwardIcon />}
            onClick={next}
          />
        </Flex>
      </Flex>

      {testimonials.map((item, i) => (
        i === index && (
          <Box key={i} maxW="4xl" mx="auto" pt="10px">
            <Image
             // placeholder="empty"
              width={700}
              height={500}
              unoptimized
              src={item.image}
              alt={item.author}
              style={{
                borderRadius: 12,
                width: "100%",
                height: isMobile ? "300px" : "500px",
                maxHeight: isMobile ? "300px" : "500px",
                objectFit: "cover",
              }}
            />
            <Text fontSize="18px" mt={4} color="#6B4437">
              TESTIMONIAL CLIENT
            </Text>
            <Heading fontSize="48px">
              Success Stories That Inspire Confidence.
            </Heading>
            <Text mt={6} fontSize="32px" color="gray.600" minHeight="60px">
              “{item.text}”
            </Text>
            <Flex justifyContent="center" alignItems="center" mt={6}>
              <Image
                src={item.avatar}
                alt={item.author}
                width={50}
                height={50}
                style={{ borderRadius: "50%", marginRight: 12 }}
                unoptimized
              />
              <Box textAlign="left">
                <Text fontWeight="bold" fontSize="24px">
                  {item.author}
                </Text>
                <Text fontSize="16px" color="#6B4437">
                  Investor
                </Text>
              </Box>
            </Flex>
          </Box>
        )
      ))}
    </Box>
  );
}
