import {
  Box,
  Flex,
  useColorMode,
  Image,
  Text,
  VStack,
  Button,
  Tooltip,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination } from "swiper/modules";
import { useTranslation } from "react-i18next";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { useState } from "react";

/* Importação dos Ícones*/
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

/*Importação dos Componentes*/
import ToolBar from "../components/ToolBar";
import Footer from "../components/Footer";
import ModalPostLinkedin from "../components/ModalPostLinkedin";


/*Importação das Imagens*/
import MockupRec from "../img/Mockup RecDaTerra.png";
import MockupMarvel from "../img/Mockup Marvel.png";
import MockupPorfolio from "../img/Mockup Portfolio.png";
import MockupINEP from "../img/Mockup INEP.png";

/*Importação da estilização da Paginação do Swiper*/
import "./Pagination.css";
import CustomButton from "../components/CustomButton";


const Projects = () => {
  const { t } = useTranslation();
  const { colorMode } = useColorMode();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openRecDaTerraModal = () => setIsModalOpen(true);

  const marvelURL = "https://youtu.be/QvnORPjHWNM";
  const inepURL = "https://youtu.be/76q_v6AGyF0";
  const portfolioURL = "https://youtu.be/lBk3A0VT8o8";
  const recDaTerraURL = "https://youtu.be/45haHOWVpSA";

  const projectData = [
    {
      title: t("marvel"),
      description: t("nameProject"),
      summary: t("summaryMarvel"),
      imageSrc: MockupMarvel,
      imageAlt: "Mockup do Projeto Marvel Characters",
      videoURL: marvelURL,
      hoverBackgroundColor: "#2D2626",
      hoverBorderColor: "#EA2D2E",
      techUsed: [
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
          alt: "Typescript",
          width: "30px", // Ajustado para responsividade
          description: "Typescript",
        },
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
          alt: "Reactt",
          width: "30px", // Ajustado para responsividade
          description: "React",
        },
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain-wordmark.svg",
          alt: "Axios",
          width: "30px", // Ajustado para responsividade
          description: "Axios",
        },
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
          alt: "Vite",
          width: "30px", // Ajustado para responsividade
          description: "Vite",
        },
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original-wordmark.svg",
          alt: "Vercel",
          width: "30px", // Ajustado para responsividade
          description: "Vercel",
        },
      ],
      teamMembers: "Gabriel Henrique",
      projectWebsite: "https://marvel-characters-six.vercel.app/",
      repo: "https://github.com/gabrielhilins/Marvel_Characters",
    },
    {
      title: "RecDaTerra",
      description: t("nameProject"),
      summary: t("summaryRecDaTerra"),
      imageSrc: MockupRec,
      imageAlt: "Mockup do Projeto Rec Da Terra",
      videoURL: recDaTerraURL,
      hoverBackgroundColor: "#76603F",
      hoverBorderColor: "#98FF68",
      linkedinPost: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7237646199963480065",
      techUsed: [
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
          alt: "Spring Boot",
          width: "30px", // Ajustado para responsividade
          description: "Spring Boot",
        },
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
          alt: "React",
          width: "30px", // Ajustado para responsividade
          description: "React.JS",
        },
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
          alt: "Vite",
          width: "30px", // Ajustado para responsividade
          description: "Vite",
        },
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original-wordmark.svg",
          alt: "Vercel",
          width: "30px", // Ajustado para responsividade
          description: "Vercel",
        },
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
          alt: "Figma",
          width: "30px", // Ajustado para responsividade
          description: "Figma",
        },
      ],
      teamMembers:
        "Arthur Vinícius, Cecília Sitcovisky, Gabriel Henrique, Matheus Vinícius e Yuri Catunda",
      projectWebsite: "https://rec-da-terra-front-end.vercel.app/",
      repo: "https://github.com/SIN-disciplina-PI3/RecDaTerra_FrontEnd",
    },
    {
      title: "Dashboard INEP",
      description: t("nameProject"),
      summary: t("summaryINEP"),
      imageSrc: MockupINEP,
      imageAlt: "Mockup do Projeto Dashboard INEP",
      videoURL: inepURL,
      hoverBackgroundColor: "white",
      hoverBorderColor: "#9BB0E5",
      techUsed: [
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg",
          alt: "HTML",
          width: "30px", // Ajustado para responsividade
          description: "HTML",
        },
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg",
          alt: "CSS",
          width: "30px", // Ajustado para responsividade
          description: "CSS",
        },
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
          alt: "Node.js",
          width: "30px", // Ajustado para responsividade
          description: "Node.js",
        },
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg",
          alt: "PostgreSQL",
          width: "30px", // Ajustado para responsividade
          description: "PostgreSQL",
        },
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
          alt: "Figma",
          width: "30px", // Ajustado para responsividade
          description: "Figma",
        },
      ],
      teamMembers:
        "Arthur Vinícius, Gabriel Henrique, Luiz Henrique & Yuri Catunda",
      projectWebsite: "https://projeto-dashboard-inep.vercel.app/index.html",
      repo: "https://github.com/gabrielhilins/Projeto-Dashboard-Inep",
    },
    {
      title: t("portfolio"),
      description: t("nameProject"),
      summary: t("summaryPortfolio"),
      imageSrc: MockupPorfolio,
      imageAlt: "Mockup do meu Portfolio",
      videoURL: portfolioURL,
      hoverBackgroundColor: "#6C63FF",
      hoverBorderColor: "#white",
      linkedinPost: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7237957324441567233",
      techUsed: [
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
          alt: "React",
          width: "30px", // Ajustado para responsividade
          description: "React",
        },

        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
          alt: "Vite",
          width: "30px", // Ajustado para responsividade
          description: "Vite",
        },
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original-wordmark.svg",
          alt: "Vercel",
          width: "30px", // Ajustado para responsividade
          description: "Vercel",
        },
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
          alt: "Figma",
          width: "30px", // Ajustado para responsividade
          description: "Figma",
        },
      ],
      teamMembers: "Gabriel Henrique",
      projectWebsite:
        "https://portfolio-gabriel-henriques-projects.vercel.app/",
      repo: "https://github.com/gabrielhilins/Portfolio",
    },
  ];

  const repoButtonBorderColor = useColorModeValue("black", "white");
  const repoButtonTextColor = useColorModeValue("black", "white");

  const bgHover = useColorModeValue("#1D1C1C", "white");
  const textColorHover = useColorModeValue("white", "black");
  const borderColorHover = useColorModeValue("white", "black");

  const Slide = ({ project }) => {
    const { colorMode } = useColorMode();
    return (
      <Flex
        width="100%"
        maxWidth="1060px"
        alignItems="center"
        justifyContent="center"
        overflow="hidden"
        padding={{ base: "10px", md: "20px" }} // Ajustado para responsividade
        height="100%"
        direction={{ base: "column", md: "row" }}
      >
        <Box
          backgroundColor={colorMode === "light" ? "white" : "#1D1C1C"}
          width="100%"
          height="100%"
          borderRadius="15px"
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          alignItems="center"
          justifyContent={{ base: "center", md: "unset" }}
          textAlign={{ base: "center", md: "left" }}
        >
          {/* Lado Esquerdo */}
          <Box
            width={{ base: "100%", md: "50%" }}
            padding="15px"
            display="flex"
            flexDirection="column"
            alignItems={{ base: "center", md: "flex-start" }}
          >
            <VStack
              align={{ base: "center", md: "left" }}
              spacing={2}
              pl={{ base: "0", md: "40px" }}
            >
              <Text fontSize={{ base: "10px", md: "14px" }}>
                {project.description}
              </Text>
              <Text
                fontSize={{ base: "20px", md: "28px" }}
                fontWeight="700"
                pb="10px"
              >
                {project.title}
              </Text>
              <Text
                fontSize={{ base: "12px", md: "16px" }}
                fontWeight="500"
                pb="30px"
                textAlign="justify"
                p={{ base: "2", md: "5" }} // Ajuste do padding com base em tamanhos de tela
              >
                {project.summary}
              </Text>
              <Text fontSize={{ base: "10px", md: "14px" }}>
                {t("techUsed")}
              </Text>
              <Box
                display="flex"
                flexDirection="row"
                gap="15px"
                pb="30px"
                justifyContent="center"
              >
                {project.techUsed.map((logo, index) => (
                  <Tooltip
                    key={index}
                    label={logo.description}
                    aria-label={logo.description}
                  >
                    <Box display="flex" alignItems="center">
                      <img src={logo.src} alt={logo.alt} width={logo.width} />
                    </Box>
                  </Tooltip>
                ))}
              </Box>
              <Text fontSize={{ base: "10px", md: "14px" }}>
                {t("learnMoreProject")}
              </Text>
              <Box
                display="flex"
                flexDirection="column" // Altera a direção do layout para coluna
                gap="15px" // Espaço entre as linhas
                pb="30px"
                justifyContent="center"
                p="5"
              >
                <Box
                  display="flex"
                  flexDirection="row" // Os dois primeiros botões estarão lado a lado
                  gap="15px"
                  mb="15px" // Margem inferior para separar os botões
                  justifyContent="center"
                  flexWrap="wrap" // Permite quebra de linha em dispositivos menores
                >
                  <CustomButton
                    href={project.projectWebsite}
                    hoverBackgroundColor={project.hoverBackgroundColor}
                    hoverBorderColor={project.hoverBorderColor}
                  >
                    <Icon as={FaArrowUpRightFromSquare} />
                    {t("projectWebsite")}
                  </CustomButton>
                  <Button
                    border={`1px solid ${repoButtonBorderColor}`}
                    color={repoButtonTextColor}
                    backgroundColor="transparent"
                    px={{ base: "8px", sm: "12px", md: "20px" }}
                    py={{ base: "4px", sm: "6px", md: "10px" }}
                    minW={{ base: "100px", md: "160px" }}
                    borderRadius="md"
                    display="flex"
                    alignItems="center"
                    gap="8px"
                    as="a"
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    fontSize={{ base: "12px", sm: "14px", md: "16px" }}
                    _hover={{
                      backgroundColor: bgHover,
                      color: textColorHover,
                      border: "1px solid",
                      borderColor: borderColorHover,
                    }}
                  >
                    <Icon as={FaGithub} />
                    {t("repo")}
                  </Button>
                </Box>
                {project.linkedinPost && (
                  <Box display="flex" justifyContent="center">
                    <Button
                      bgColor="#0077B5"
                      color="white"
                      px={{ base: "8px", sm: "12px", md: "20px" }}
                      py={{ base: "4px", sm: "6px", md: "10px" }}
                      minW={{ base: "120px", md: "160px" }}
                      borderRadius="md"
                      gap="8px"
                      as="button"
                      onClick={() => setIsModalOpen(true)}
                      width={{ base: "60px", sm: "100px", md: "160px" }}
                      fontSize={{ base: "12px", sm: "14px", md: "16px" }}
                      _hover={{
                        bg: "white",
                        color: "#0077B5",
                        border: "1px solid",
                        borderColor: "#0077B5",
                      }}
                    >
                      <Icon as={FaLinkedin} />
                      {t("postLinkedin")}
                    </Button>
                    {/* Modal dinâmico baseado na existência de linkedinPost */}
                    {project.linkedinPost && (
                      <ModalPostLinkedin
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        linkedinPostUrl={project.linkedinPost} // Passa o URL do post do LinkedIn
                      />
                    )}
                  </Box>
                )}

                <Text fontSize={{ base: "10px", md: "14px" }} paddingTop="20px">
                  {t("teamMembers")}
                </Text>
                <Text
                  fontSize={{ base: "10px", md: "14px" }}
                  padding={{ base: "0", md: "0px" }}
                >
                  {project.teamMembers.split(",").map((name, index) => {
                    const trimmedName = name.trim();
                    return trimmedName === "Gabriel Henrique" ? (
                      <a
                        href="https://www.linkedin.com/in/gabriel-henrique-lins"
                        target="_blank"
                        rel="noopener noreferrer"
                        key={index}
                      >
                        <strong>
                          {trimmedName}
                          {index < project.teamMembers.split(",").length - 1
                            ? ", "
                            : ""}
                        </strong>
                      </a>
                    ) : (
                      <span key={index}>
                        {trimmedName}
                        {index < project.teamMembers.split(",").length - 1
                          ? ", "
                          : ""}
                      </span>
                    );
                  })}
                </Text>
              </Box>
            </VStack>
          </Box>

          {/* Lado Direito */}
          <Box
            as="a"
            href={project.videoURL}
            target="_blank"
            rel="noopener noreferrer"
            width={{ base: "100%", md: "50%" }}
            padding="15px"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            borderRadius="15px"
            _hover={{ transform: "scale(1.1)" }}
            transition="transform 0.3s ease"
          >
            <Image
              src={project.imageSrc}
              alt={project.imageAlt}
              width={{ base: "80%", md: "100%" }} // Ajustado para responsividade
              maxWidth="500px"
              height="auto"
              borderRadius="md"
              cursor="pointer"
            />
            <Box
              display="flex"
              flexDirection="row"
              gap="12px"
              justifyContent="center"
              alignItems="center"
            >
              <Icon as={FaYoutube} color="#FF0000" />
              <Text
                fontSize={{ base: "6px", md: "10px" }}
                textDecoration="underline"
              >
                {t("youtube")}
              </Text>
            </Box>
          </Box>
        </Box>
      </Flex>
    );
  };

  return (
    <div
      className="container"
      style={{ width: "100%", padding: "20px", boxSizing: "border-box" }}
    >
      <Flex
        direction="column"
        align="center"
        justify="center"
        maxW="1060px"
        w="100%"
        h="100%"
        margin="auto"
        textAlign="center"
      >
        <Box width="100%" textAlign="center" my="40px">
          <div className="title">
            <Text fontSize={{ base: "24px", md: "36px" }} fontWeight="700">
              {t("projects")}
            </Text>
          </div>
          <Box display="flex" alignItems="center" justifyContent="center">
            <ToolBar />
          </Box>
          <Swiper
            effect="cube"
            grabCursor={true}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            pagination={{ clickable: true }}
            loop={true}
            modules={[EffectCube, Pagination]}
            className="mySwiper"
            style={{ width: "100%", height: "100%" }}
          >
            {projectData.map((project, index) => (
              <SwiperSlide key={index}>
                <Slide project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Flex>
      <Footer />
    </div>
  );
};

export default Projects;
