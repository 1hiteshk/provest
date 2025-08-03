"use client";

import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorMode,
  useBreakpointValue,
  Button,
  VStack,
  Text,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import Image from "next/image";

const navItems = ["Home", "About", "Services", "Properties", "FAQ"];

type SectionsRefs = {
  [key: string]: { current: HTMLElement | null }
};

export default function Header({ sections }: { sections: SectionsRefs }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const isMobile = useBreakpointValue({ base: true, md: false });

  const scrollTo = (section: string) => {
    sections[section.toLowerCase()]?.current?.scrollIntoView({
      behavior: "smooth",
    });
    onClose();
  };

  return (
    <Box position="fixed" w="100%" zIndex="999" bg="gray.50" _dark={{ bg: "gray.800" }}>
      <Flex justify="space-between" align="center" p={4} px={6}>
        
       <Flex align="center" gap={2} cursor={'pointer'} >
         <Image src={colorMode==='light'? "/home.svg": '/homewhite.svg'} alt="Provest Logo" width={42} height={42} />
       <Flex>
        <Text fontWeight="normal" fontSize='26px'>Pro</Text>
        <Text fontWeight="bold" fontSize="26px">vest</Text>
       </Flex>
       </Flex>

        {isMobile ? (
          <HStack>
            <IconButton
              aria-label="Toggle Theme"
              icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              onClick={toggleColorMode}
              variant="ghost"
              fontSize={'26px'}
            />
            <IconButton
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              onClick={isOpen ? onClose : onOpen}
              variant="ghost"
              aria-label="Menu"
                fontSize={'26px'}
            />
          </HStack>
        ) : (
          <HStack spacing={6} alignItems="center">
            {navItems.map((item) => (
              <Button key={item} variant="ghost" color={colorMode==='light'? '#1B1B1B' : '#EDF2F7'} fontSize={'20px'} onClick={() => scrollTo(item)}>
                {item}
              </Button>
            ))}
            <IconButton
              aria-label="Toggle Theme"
              icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              onClick={toggleColorMode}
              variant="ghost"
            />
          </HStack>
        )}
      </Flex>

      {isMobile && isOpen && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.4 }}
          style={{ position: "absolute", width: "100%", background: colorMode === "light" ? "#fff" : "#1A202C" }}
        >
          <VStack spacing={4} p={6}>
            {navItems.map((item) => (
              <Button w="full" key={item} onClick={() => scrollTo(item)}>
                {item}
              </Button>
            ))}
          </VStack>
        </motion.div>
      )}
    </Box>
  );
}
