import { useState } from "react";
import { FaGithub, FaGlobe, FaLinkedin } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";
import { RiSpeakFill } from "react-icons/ri";
import { MdWork } from "react-icons/md";
import {
  Box,
  Flex,
  Center,
  VStack,
  Image,
  Heading,
  Text,
  Link,
  HStack,
  Icon,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import FotoGabriel from "../img/FotoGabriel.png";
import ModalResume from "../components/ModalResume";

const Links = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { colorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const agencyLinks = [
    {
      id: 1,
      title: "Meu Portfólio Pessoal",
      url: "/",
      icon: MdWork,
      color: colorMode === "light" ? "#6C63FF" : "#2E24D3",
      highlight: true,
    },
    {
      id: 2,
      title: "Meu currículo",
      url: null,
      icon: TbFileCv,
      color: colorMode === "light" ? "#6C63FF" : "#2E24D3",
      highlight: false,
    },
    {
      id: 3,
      title: "Meu LinkedIn",
      url: "https://www.linkedin.com/in/gabriel-henrique-lins/",
      icon: FaLinkedin,
      color: colorMode === "light" ? "#6C63FF" : "#2E24D3",
      highlight: false,
    },
    {
      id: 4,
      title: "Meu Github",
      url: "https://www.github.com/gabrielhilins",
      icon: FaGithub,
      color: colorMode === "light" ? "#6C63FF" : "#2E24D3",
      highlight: false,
    },
    {
      id: 5,
      title: "Site da minha agência de Tech & design",
      url: "https://www.ggabstechdesign.com.br/",
      icon: FaGlobe,
      color: colorMode === "light" ? "#6C63FF" : "#2E24D3",
      highlight: false,
    },
    {
      id: 5,
      title: "Falar comigo",
      url: "/talk",
      icon: RiSpeakFill,
      color: colorMode === "light" ? "#6C63FF" : "#2E24D3",
      highlight: false,
    },
  ];

  return (
    <div className="container">
      <Flex
        direction="column"
        padding="20px"
        boxSizing="border-box"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Box
          width={{ base: "100%", sm: "90%", md: "80%", lg: "600px" }}
          maxWidth="100%"
          backgroundColor={colorMode === "light" ? "white" : "#1D1C1C"}
          padding="15px"
          color={colorMode === "light" ? "black" : "white"}
          textAlign="center"
          display="flex"
          flexDirection="column"
          alignItems="center"
          borderRadius="15px"
          boxShadow="0px 4px 10px rgba(0, 0, 0, 0.25)"
          overflow="visible"
          animation="floating 3s ease-in-out infinite"
        >
          <VStack spacing={2} align="center" mb={8} mt="30px">
            <Image
              src={FotoGabriel}
              alt="Gabriel Henrique Lins"
              objectFit="contain"
              w={{ base: "80px", sm: "100px", md: "120px" }}
              h={{ base: "80px", sm: "100px", md: "120px" }}
              borderRadius="full"
            />
            <Heading
              as="h1"
              fontSize={{ base: "20px", sm: "24px", md: "28px" }}
              fontWeight="700"
            >
              Gabriel Henrique Lins
            </Heading>
            <Text fontSize={{ base: "12px", sm: "14px", md: "16px" }} color="gray.600">
              Desenvolvedor Full Stack e Fundador da{" "}
              <Link
                href="https://www.ggabstechdesign.com.br/"
                isExternal
                target="_blank"
                rel="noopener noreferrer"
                color="gray.600"
                textDecoration="underline"
                _hover={{
                  color: colorMode === "light" ? "#6C63FF" : "#2E24D3",
                  textDecoration: "underline",
                }}
              >
                GGABS TECH & DESIGN
              </Link>
            </Text>
          </VStack>

          <VStack spacing={3} mb={6} w="100%">
            {agencyLinks.map((link, index) => (
              <Link
                key={link.id}
                as={link.url ? "a" : "button"}
                href={link.url}
                onClick={link.url ? undefined : onOpen}
                isExternal={link.url && link.url.startsWith("http")}
                target={link.url ? "_blank" : undefined}
                rel={link.url ? "noopener noreferrer" : undefined}
                w="100%"
                p={{ base: 3, md: 4 }}
                borderRadius="md"
                bg={link.highlight ? "#B60000" : "rgba(255, 255, 255, 0.05)"}
                color="white"
                fontWeight="500"
                border={link.highlight ? "none" : "1px solid rgba(255, 255, 255, 0.1)"}
                boxShadow="0 3px 10px rgba(0, 0, 0, 0.1)"
                transition="all 0.3s ease"
                _hover={{
                  transform: "translateY(-2px) scale(1.03)",
                  boxShadow: "0 6px 14px rgba(0, 0, 0, 0.2)",
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                aria-label={link.title}
              >
                <HStack spacing={4}>
                  <Center
                    w={{ base: "36px", sm: "44px", md: "48px" }}
                    h={{ base: "36px", sm: "44px", md: "48px" }}
                    borderRadius="full"
                    bg={link.highlight ? "rgba(0, 0, 0, 0.2)" : link.color}
                    color="white"
                    transition="transform 0.3s ease"
                    transform={hoveredIndex === index ? "scale(1.1)" : "scale(1)"}
                  >
                    <Icon as={link.icon} boxSize={{ base: 6, md: 7 }} />
                  </Center>
                  <Text
                    fontSize={{ base: "14px", sm: "16px", md: "18px" }}
                    color={
                      link.highlight
                        ? "white"
                        : colorMode === "light"
                        ? "black"
                        : "#2E24D3"
                    }
                  >
                    {link.title}
                  </Text>
                </HStack>
              </Link>
            ))}
          </VStack>

          <ModalResume isOpen={isOpen} onClose={onClose} />

          <Center mt={5}>
            <Text fontSize={{ base: "10px", sm: "12px", md: "14px" }} color="gray.400">
              © {new Date().getFullYear()} Gabriel Henrique Lins.
            </Text>
          </Center>
        </Box>
      </Flex>
    </div>
  );
};

export default Links;