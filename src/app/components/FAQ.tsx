"use client";

import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  Text,
} from "@chakra-ui/react";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We provide property consulting, real estate investments, and asset management services.",
  },
  {
    question: "How can I schedule a consultation?",
    answer:
      "Use our contact form in the footer or call us directly to set up a free consultation.",
  },
  {
    question: "What types of properties do you list?",
    answer:
      "We list residential, commercial, and luxury investment properties globally.",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "We list residential, commercial, and luxury investment properties globally 1 month.",
  },
  {
    question: "What is the process for starting a project?",
    answer:
      "We start with a consultation to understand your needs, followed by a detailed proposal and project plan.",
  },
  {
    question: "How do I know if your agency is the right fit for me?",
    answer:
      "We offer a free initial consultation to discuss your needs and how we can help you achieve your investment goals.",
  },
];

export default function FAQ() {
  return (
    <Box py={20} px={6} maxW="4xl" mx="auto">
      <Text
        padding={"10px 30px"}
        gap={"10px"}
        borderRadius={"100px"}
        backgroundColor={"#6B4437"}
        color={"white"}
        fontSize={"16px"}
        width={"fit-content"}
        margin={"0 auto"}
      >
        PROPERTY INVESTMENT
      </Text>
      <Text textAlign="center" mb={10} fontSize={"48px"}>
        Frequently Asked Questions
      </Text>
      <Accordion allowToggle>
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
        //    border="1px solid"
         //   borderColor="gray.200"
            borderRadius={{ base:'100px' ,md:"100px"}}
            mb={"20px"}
          >
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton
                    padding={{ base: "15px 30px", md: "30px 60px" }}
                    bg={"white"}
                    _dark={{ bg: "gray.700" }}
                    borderRadius={{ base:'100px' ,md:"100px"}}
                    _expanded={{ bg: "#6B4437", color: "white" }}
                  >
                    <Box
                      flex="1"
                      textAlign="left"
                      fontSize={{ base: "20px", sm: "28px" }}
                    >
                      {faq.question}
                    </Box>
                    <Box
                      as="span"
                      ml={2}
                      fontSize="40px"
                      fontWeight="bold"
                      color="#1B1B1B"
                      _dark={{ color: "white" }}
                    >
                      {isExpanded ? "-" : "+"}
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel padding={{ base: "20px 40px", md: "30px 60px" }}>
                  {faq.answer}
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
}
