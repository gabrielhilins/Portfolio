import { Box, Flex, useColorMode, Text, Tooltip, Icon, Link } from "@chakra-ui/react";
import Toolbar from "../components/ToolBar";
import { useTranslation } from "react-i18next";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

function Talk() {
  const { colorMode } = useColorMode();
  const { t } = useTranslation();

  // Defina o gradiente com base no modo de cor atual
  const contactBackground = colorMode === 'dark'
    ? 'linear-gradient(to bottom, #780E0E, #322AB2)'
    : 'linear-gradient(to bottom, #DB4F4F, #6C63FF)';

  return (
    <div className="container">
      <div className="title">{t("talkWithMe")}</div>
      <Toolbar />

      <Flex
        minHeight="100vh" // Altura mínima da viewport
        alignItems="center" // Centraliza verticalmente
        justifyContent="center" // Centraliza horizontalmente
        padding="20px"
        width="100%"
        overflow="hidden"
        mt="60px"
        mb="20px"
      >
        <Box
          width="100%"
          maxWidth="1074px" // Largura máxima
          minWidth="70%" // Largura mínima
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          overflow="hidden"
        >
          {/* Formulário à esquerda em telas menores e primeiro em telas maiores */}
          <Box
            width="100%"
            minHeight="300px" // Altura mínima
            backgroundColor={colorMode === "light" ? "white" : "#1D1C1C"}
            padding="15px"
            color={colorMode === "light" ? "black" : "white"}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            boxShadow="0px 4px 10px rgba(0, 0, 0, 0.25)"
            order={{ base: 1, md: 1 }} // Coloca o formulário primeiro
          >
            <Text
              color="#B60000"
              fontSize={{ base: "24px", md: "32px" }}
              fontWeight="700"
              textAlign="center"
            >
              {t('formulario')}
            </Text>
            <ContactForm />
          </Box>

          {/* Outras formas de contato à direita em telas menores e segundo em telas maiores */}
          <Box
            width="100%"
            minHeight="300px" // Altura mínima
            background={contactBackground} // Gradiente condicional
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            padding="15px"
            order={{ base: 2, md: 2 }} // Coloca as outras formas de contato depois
          >
            <Text
              color="white"
              fontSize={{ base: "18px", md: "24px" }}
              textAlign="center"
              fontWeight="700"
            >
              {t('otherWaysToChat')}
            </Text>
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
        </Box>
      </Flex>

      <Footer />
    </div>
  );
}

export default Talk;
