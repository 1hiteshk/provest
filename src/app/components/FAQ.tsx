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
  {
    question: "How long does it take to complete a project?",
    answer: "We list residential, commercial, and luxury investment properties globally 1 month.",
  },
  {
    question: "What is the process for starting a project?",
    answer: "We start with a consultation to understand your needs, followed by a detailed proposal and project plan.",
  },
  {
    question: "How do I know if your agency is the right fit for me?",
    answer: "We offer a free initial consultation to discuss your needs and how we can help you achieve your investment goals.",
  },
];

export default function FAQ() {
  return (
    <Box py={20} px={6} maxW="4xl" mx="auto">
      <Heading textAlign="center" mb={10}>Frequently Asked Questions</Heading>
      <Accordion allowToggle>
       {faqs.map((faq, index) => (
          <AccordionItem key={index} border="1px solid" borderColor="gray.200" borderRadius="md" mb={4}>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton _expanded={{ bg: "teal.400", color: "white" }}>
                    <Box flex="1" textAlign="left">{faq.question}</Box>
                    <Box as="span" ml={2} fontSize="26px" fontWeight='bold' color="gray.500">
                      {isExpanded ? "-" : "+"}
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>{faq.answer}</AccordionPanel>
              </>
            )}
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
}