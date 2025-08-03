import { Flex, Heading, Text, VStack, Icon } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

interface ReadMoreCardProps {
  title: string;
  description: string;
  linkText?: string;
}

export default function ReadMoreCard({ title, description, linkText = "Read More" }: ReadMoreCardProps) {
  return (
    <VStack
      align="flex-start"
      spacing={4}
      maxW="sm"
      bg="transparent"
      p={4}
    >
      <Heading fontSize={'32px'} fontWeight={'500'} >
        {title}
      </Heading>
      <Text fontSize="20px" color="gray.600">
        {description}
      </Text>
      <Flex align="center" gap={2} color="#6B4437" fontSize="20px" cursor="pointer">
        <Text>{linkText}</Text>
        <Icon as={ArrowForwardIcon} boxSize={4} />
      </Flex>
    </VStack>
  );
}