"use client";

import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Heading } from "@chakra-ui/react";

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We provide property consulting, real estate investments, and asset management services.",
  },
  {
    question: "How can I schedule a consultation?",
    answer: "Use our contact form in the footer or call us directly to set up a free consultation.",
  },
  {
    question: "What types of properties do you list?",
    answer: "We list residential, commercial, and luxury investment properties globally.",
  },
];

export default function FAQ() {
  return (
    <Box py={20} px={6} maxW="4xl" mx="auto">
      <Heading textAlign="center" mb={10}>Frequently Asked Questions</Heading>
      <Accordion allowToggle>
        {faqs.map((faq, index) => (
          <AccordionItem key={index} border="1px solid" borderColor="gray.200" borderRadius="md" mb={4}>
            <h2>
              <AccordionButton _expanded={{ bg: "teal.400", color: "white" }}>
                <Box flex="1" textAlign="left">{faq.question}</Box>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>{faq.answer}</AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
}