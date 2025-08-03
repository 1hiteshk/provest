'use client';
import Image from "next/image";
import styles from "./page.module.css";
import { useRef } from "react";
import theme from "./theme/theme";
import { Box, ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import TagsScroll from "./components/TagsScroll";
import PropertiesCarousel from "./components/PropertiesCarousel";
import Stats from "./components/Stats";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";

export default function HomePage() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const propertiesRef = useRef(null);
  const faqRef = useRef(null);

  const sections = {
    home: homeRef,
    about: aboutRef,
    services: servicesRef,
    properties: propertiesRef,
    faq: faqRef,
  };

  return (
    <ChakraProvider theme={theme}>
      <Box bg="gray.50" _dark={{ bg: "gray.900" }}>
        <Header sections={sections} />
        <Box ref={homeRef}><Hero /></Box>
        <Testimonials />
        <TagsScroll />
        <Box ref={propertiesRef}><PropertiesCarousel /></Box>
        <Stats />
        <Box ref={faqRef}><FAQ /></Box>
        <Footer />
        <ScrollToTopButton />
      </Box>
    </ChakraProvider>
  );
}