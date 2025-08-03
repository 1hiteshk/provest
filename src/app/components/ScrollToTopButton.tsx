"use client";

import { useEffect, useState } from "react";
import { IconButton } from "@chakra-ui/react";
import { ChevronUpIcon } from "@chakra-ui/icons";

export default function ScrollToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!show) return null;

  return (
    <IconButton
      icon={<ChevronUpIcon />}
      position="fixed"
      bottom={6}
      right={6}
      colorScheme="teal"
      aria-label="Scroll to top"
      onClick={scrollToTop}
      zIndex={999}
    />
  );
}