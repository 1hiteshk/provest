"use client";

import { Box, Flex, Heading, Text, VStack, Icon } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import ReadMoreCard from "./common/ReadMoreCard";



export default function ExpertiseSection() {
  return (
    <Flex direction={{ base: "column", md: "row" }} justify="space-between" align="flex-start" px={{ base: 4, md: 20 }} py={16} gap={8} bg="gray.50">
      <Box flexShrink={0}>
        <Heading fontSize={{ base: "3xl", md: "5xl" }} lineHeight="1.2">
          Where <br /> Expertise Meets <br /> Opportunity.
        </Heading>
      </Box>

      <Flex direction={{ base: "column", md: "row" }} gap={8}>
        <ReadMoreCard
          title="Trusted By Investors Worldwide For Proven Results."
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
        />
        <ReadMoreCard
          title="Trusted By Investors Worldwide For Proven Results."
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
        />
      </Flex>
    </Flex>
  );
}
