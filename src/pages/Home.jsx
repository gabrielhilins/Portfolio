import {
  Flex,
  Box,
  Image,
  Text,
  Icon,
  Button,
  Link,
  useDisclosure,
  useColorMode,
  useColorModeValue,
  Tooltip,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

import { useTranslation } from "react-i18next";

/* Importação dos ícones */
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";
import { GiTalk } from "react-icons/gi";
import { CiLocationOn } from "react-icons/ci";

import FotoGabriel from "../img/FotoGabriel.png";

/* Importação dos Componentes */
import LanguageSwitcher from "../components/LanguageSwitcher";
import ModalResume from "../components/ModalResume";
import TechLogos from "../components/TechLogos";
import ColorModeSwitcher from "../components/ColorModeSwitcher";
import Footer from "../components/Footer";
import SoftSkills from "../components/SoftSkills";
import ModalAboutMe from "../components/ModalAboutMe";

function Home() {
  const { t, i18n } = useTranslation();
  const {
    isOpen: isOpenResume,
    onOpen: onOpenResume,
    onClose: onCloseResume,
  } = useDisclosure(); // Para Modal de CV
  
  const {
    isOpen: isOpenAboutMe,
    onOpen: onOpenAboutMe,
    onClose: onCloseAboutMe,
  } = useDisclosure(); // Para Modal About Me

  const { colorMode, toggleColorMode } = useColorMode();


  return (
    <div className="container">
      <Flex
        direction="column"
        padding="20px"
        boxSizing="border-box"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          width={{ base: "100%", sm: "90%", md: "80%", lg: "453px" }} // Ajuste responsivo
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
          overflow="visible" // Permite que o conteúdo transborde se necessário
          animation="floating 3s ease-in-out infinite"
        >
          {/* Cabeçalho */}
          <Box
            display="flex"
            flexDirection="row" // Empilha verticalmente em telas pequenas
            alignItems="center"
            mb="10px"
            gap="30px"
            animation="floating 3s ease-in-out infinite"
            mt="30px"
          >
            <LanguageSwitcher />

            <Image
              src={FotoGabriel}
              alt="Foto Gabriel"
              marginRight={{ sm: "10px" }}
            />

            <ColorModeSwitcher />
          </Box>
          <Text
            fontSize={{ base: "18px", sm: "20px" }}
            fontWeight="700"
            paddingTop="5px"
            onClick={onOpenAboutMe} // Abre o modal
            cursor="pointer"
            _hover={{
              color: "#B60000",
              transition: "color 0.2s ease-in-out",
            }}
          >
            {t("name")}
          </Text>
          <ModalAboutMe isOpen={isOpenAboutMe} onClose={onCloseAboutMe} />
          
          <Text fontSize={{base: "8px", md: "10px"}} marginBottom="16px" fontWeight="500">Clique no meu nome acima para saber mais sobre mim</Text>
          <Text
            fontSize={{ base: "14px", sm: "15px" }}
            fontWeight="400"
            paddingTop="3px"
          >
            {t("jobTitle")}
          </Text>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            paddingRight="4px"
            paddingTop="5px"
            mb="10px"
          >
            <Icon as={CiLocationOn} marginRight="10px" />
            <Text fontSize={{ base: "10px", sm: "12px" }} fontWeight="300">
              {t("location")}
            </Text>
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            flexWrap="wrap"
            justifyContent="center"
            paddingTop="20px"
            mb="10px"
            gap="35px" // Adiciona um espaçamento entre os ícones
            animation="floating 4s ease-in-out infinite"
          >
            <Tooltip label={t('linkedin')} aria-label={t('linkedin')} placement="bottom">
              <Link
                href="https://www.linkedin.com/in/gabriel-henrique-lins/"
                isExternal
                transition="transform 0.3s ease-in-out"
                _hover={{
                  color: "#B60000",
                  transition: "color 0.2s ease-in-out",
                  transform: "scale(1.2)",
                }}
              >
                <Icon as={FaLinkedin} height="32px" width="32px" />
              </Link>
            </Tooltip>

            <Tooltip label={t('github')} aria-label={t('github')} placement="bottom">
              <Link
                href="https://github.com/gabrielhilins"
                isExternal
                transition="transform 0.3s ease-in-out"
                _hover={{
                  color: "#B60000",
                  transition: "color 0.2s ease-in-out",
                  transform: "scale(1.2)",
                }}
              >
                <Icon as={FaGithub} height="32px" width="32px" />
              </Link>
            </Tooltip>

            <Tooltip label={t('viewResume')} aria-label={t('viewResume')} placement="bottom">
              <Button
                onClick={onOpenResume}
                variant="link"
                aria-label="View Resume"
                color={useColorModeValue("black", "white")}
                transition="transform 0.3s ease-in-out"
                _hover={{
                  color: "#B60000",
                  transition: "color 0.2s ease-in-out",
                  transform: "scale(1.2)",
                }}
              >
                <Icon as={TbFileCv} height="32px" width="32px" />
              </Button>
            </Tooltip>

            <ModalResume isOpen={isOpenResume} onClose={onCloseResume} />
          </Box>
          <Text
            fontSize={{ base: "16px", sm: "18px" }}
            fontWeight="400"
            paddingTop="20px"
          >
            {t("subtitle")}
          </Text>
          <Box
            textAlign="center"
            mt="40px"
            mb="20px"
            animation="floating 3s ease-in-out infinite"
          >
            <Link as={RouterLink} to="/talk">
              <Button
                width="100%"
                maxWidth="200px"
                borderRadius="15px"
                background="linear-gradient(to bottom, #6C63FF, #B60000)"
                color="white"
                transition="transform 0.3s ease-in-out"
                _hover={{
                  transform: "scale(1.05)",
                }}
              >
                <Icon
                  as={GiTalk}
                  paddingRight="10px"
                  height="24px"
                  width="24px"
                  color="white"
                />
                {t("talkWithMe")}
              </Button>
            </Link>
          </Box>

          <Text
            fontSize={{ base: "20px", sm: "24px" }}
            fontWeight="700"
            paddingTop="20px"
          >
            {t("mySkills")}
          </Text>
          <Box
            display="flex"
            flexDirection="column"
            width="100%"
            paddingTop="20px"
            alignItems="center"
          >
            <Text
              fontSize={{ base: "14px", sm: "16px" }}
              fontWeight="700"
              paddingBottom="30px"
            >
              {t("hardSkills")}
            </Text>
            <Box
              display="flex"
              flexWrap="wrap"
              gap="10px"
              justifyContent="center"
              animation="floating 3s ease-in-out infinite"
            >
              <TechLogos />
            </Box>

            <Text
              fontSize={{ base: "14px", sm: "16px" }}
              fontWeight="700"
              paddingTop="20px"
              paddingBottom="30px"
            >
              {t("softSkills")}
            </Text>
            
            <SoftSkills />
          </Box>

          <Text
            fontSize={{ base: "24px", sm: "24px" }}
            fontWeight="700"
            paddingTop="40px"
          >
            {t("knowMore")}
          </Text>
          <Box
            display="flex"
            flexDirection="row"
            flexWrap="wrap"
            justifyContent="center"
            alignItems="center"
            paddingTop="20px"
            gap="32px"
            paddingRight="12px"
          >
            <Link
              as={RouterLink}
              to="/projects"
              _hover={{
                transform: "scale(1.05) translateY(-5px)", // Aumenta o tamanho e move para cima
                transition: "transform 0.3s ease", // Adiciona uma transição suave
              }}
            >
              <Text
                textDecoration="underline"
                fontSize={{ base: "24px", sm: "19px" }}
              >
                {t("projects")}
              </Text>
            </Link>
            <Link
              as={RouterLink}
              to="/certificates"
              _hover={{
                transform: "scale(1.05) translateY(-5px)", // Aumenta o tamanho e move para cima
                transition: "transform 0.3s ease", // Adiciona uma transição suave
              }}
            >
              <Text
                textDecoration="underline"
                fontSize={{ base: "24px", sm: "19px" }}
              >
                {t("certificates")}
              </Text>
            </Link>
            <Link
              as={RouterLink}
              to="/experiences"
              _hover={{
                transform: "scale(1.05) translateY(-5px)", // Aumenta o tamanho e move para cima
                transition: "transform 0.3s ease", // Adiciona uma transição suave
              }}
            >
              <Text
                textDecoration="underline"
                fontSize={{ base: "24px", sm: "19px" }}
              >
                {t("experiences")}
              </Text>
            </Link>
          </Box>
        </Box>
        <Footer />
      </Flex>
    </div>
  );
}

export default Home;
