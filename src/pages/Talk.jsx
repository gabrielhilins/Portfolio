import { Box, Flex, useColorMode, Text, Tooltip, Icon, Link, Button } from "@chakra-ui/react";
import Toolbar from "../components/ToolBar";
import { useTranslation } from "react-i18next";
import { FaLinkedin, FaGithub, FaWhatsapp, FaLink } from "react-icons/fa";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

function Talk() {
  const { colorMode } = useColorMode();
  const { t } = useTranslation();

  return (
    <div className="container">
      <div className="title">{t("talkWithMe")}</div>
      <Toolbar />

      <Flex
        height="100vh" // Ocupa a altura total da viewport
        alignItems="center" // Centraliza verticalmente
        justifyContent="center" // Centraliza horizontalmente
        overflow="hidden" // Garante que o conteúdo não saia da área visível
        padding="20px" // Espaçamento ao redor da caixa interna
        mt="60px"
        mb="60px"
      >
        <Box
          width="100%"
          minWidth="70%"
          maxWidth="1074px" // Largura máxima
          display="flex"
          height="900px" // Altura fixa
          borderRadius="15px"
        >
          <Box
            width="50%"
            height="100%" // Ocupa toda a altura da caixa pai
            background="linear-gradient(to right, #6C63FF, #B60000)" // Gradiente de fundo
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            padding="15px"
          >
            {/* Conteúdo da metade esquerda */}
            <Text color="white" fontSize={{base: "18px", md: "24px"}} fontStyle="normal" textAlign="center" fontWeight="700">{t('otherWaysToChat')}</Text>
            <Box
            display="flex"
            flexDirection="row"
            pt="30px"
            gap="20px"
            >

<Tooltip label={t('linkedin')} aria-label={t('linkedin')}>
  <Link
    href="https://www.linkedin.com/in/gabriel-henrique-lins/"
    isExternal
    transition="transform 0.3s ease-in-out"
    _hover={{
      transition: "color 0.2s ease-in-out",
      transform: "scale(1.2)",
    }}
  >
    <Box
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      backgroundColor={colorMode === "light" ? "white" : "#1D1C1C"}
      borderRadius="10px"
      p="4px"
    >
      <Icon
        as={FaLinkedin}
        height="32px"
        width="32px"
        color="#0077B5"
      />
    </Box>
  </Link>
</Tooltip>

<Tooltip label={t('whatsapp')} aria-label={t('whatsapp')}>
  <Link
    href="https://api.whatsapp.com/send?phone=5581999034034"
    isExternal
    transition="transform 0.3s ease-in-out"
    _hover={{
      transition: "color 0.2s ease-in-out",
      transform: "scale(1.2)",
    }}
  >
    <Box
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      backgroundColor={colorMode === "light" ? "white" : "#1D1C1C"}
      p="4px"
      borderRadius="15px"
    >
      <Icon
        as={FaWhatsapp}
        height="32px"
        width="32px"
        color="#25D366"
      />
    </Box>
  </Link>
</Tooltip>

            </Box>
            
          </Box>
          <Box
            width="50%"
            height="100%" // Ocupa toda a altura da caixa pai
            backgroundColor={colorMode === "light" ? "white" : "#1D1C1C"}
            padding="15px"
            color={colorMode === "light" ? "black" : "white"}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            borderRadius="15px"
            boxShadow="0px 4px 10px rgba(0, 0, 0, 0.25)"
          >
            {/* Conteúdo da metade direita */}
            <Text color="#B60000" fontSize={{base: "24px", md: "32px"}} fontWeight="700"textAlign="center">{t('formulario')}</Text>
            <ContactForm />
          </Box>
        </Box>
      </Flex>
        <Footer />
    </div>
  );
}

export default Talk;
