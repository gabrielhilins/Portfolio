import { Box, Flex, useColorMode, Image, Text, VStack, Button, Tooltip, Icon, useColorModeValue } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import ToolBar from "../components/ToolBar";
import Footer from "../components/Footer";
import MockupRec from '../img/Mockup RecDaTerra.png'; 
import './Projects.css';
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();
  const { colorMode } = useColorMode();

  // Informações dos projetos
  const projectData = [
    {
      title: "RecDaTerra",
      description: t("nameProject"),
      summary: t("summaryRecDaTerra"),
      imageSrc: MockupRec,
      imageAlt: "Mockup do Projeto Rec Da Terra",
      techUsed: [
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
          alt: "Java",
          width: "40px",
          description: "Java",
        },
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
          alt: "Spring Boot",
          width: "40px",
          description: "Spring Boot",
        },
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
          alt: "React",
          width: "40px",
          description: "React.JS",
        },
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
          alt: "Vite",
          width: "40px",
          description: "Vite",
        },
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original-wordmark.svg",
          alt: "Vercel",
          width: "40px",
          description: "Vercel",
        },
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
          alt: "Figma",
          width: "40px",
          description: "Figma",
        },
      ],
      teamMembers: "Arthur Vinícius, Cecília Sitcovisky, Gabriel Henrique, Matheus Vinícius e Yuri Catunda",
      projectWebsite: "https://rec-da-terra-front-end.vercel.app/",
      repo: "https://github.com/SIN-disciplina-PI3/RecDaTerra_FrontEnd",
    },
    {
      title: t("dashboardINEP"),
      description: t("nameProject"),
      summary: t(""),
      imageSrc: "caminho_para_imagem_do_outro_projeto",
      imageAlt: "Mockup do Outro Projeto",
      techUsed: [
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
          alt: "JavaScript",
          width: "40px",
          description: "JavaScript",
        },
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
          alt: "Node.js",
          width: "40px",
          description: "Node.js",
        },
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
          alt: "MongoDB",
          width: "40px",
          description: "MongoDB",
        },
      ],
      teamMembers: "Membros do segundo projeto",
      projectWebsite: "https://outroprojeto.com",
      repo: "https://github.com/seugithub/outroprojeto",
    },
    // Adicione mais projetos conforme necessário
  ];

  // Define border and text color for the repo button based on color mode
  const repoButtonBorderColor = useColorModeValue("black", "white");
  const repoButtonTextColor = useColorModeValue("black", "white");

  const Slide = ({ project }) => {
    return (
      <Flex
        width="100%"
        maxWidth="1060px"
        alignItems="center"
        justifyContent="center"
        overflow="hidden"
        padding="20px"
        height="100%"
      >
        <Box
          backgroundColor={colorMode === "light" ? "white" : "#1D1C1C"}
          width="100%"
          display="flex"
          height="100%"
          borderRadius="15px"
        >
          {/* Lado Esquerdo */}
          <Box
            width="50%"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            padding="15px"
          >
            <VStack align="left" spacing={2} pl="40px">
              <Text fontSize={{ base: "12px", md: "14px" }} textAlign="left">
                {project.description}
              </Text>
              <Text fontSize={{ base: "28px", md: "40px" }} fontWeight="700" pb="10px">
                {project.title}
              </Text>
              <Text fontSize={{ base: "14px", md: "16px" }} fontWeight="500" pb="30px" textAlign={"justify"}>
              {project.summary} {/* Exibindo o resumo aqui */}
            </Text>
              <Text fontSize={{ base: "12px", md: "14px" }} textAlign="left">
                {t("techUsed")}
              </Text>
              <Box display="flex" flexDirection="row" gap="10px" pb="30px">
                {project.techUsed.map((logo, index) => (
                  <Tooltip key={index} label={logo.description} aria-label={logo.description}>
                    <Box display="flex" alignItems="center">
                      <img src={logo.src} alt={logo.alt} width={logo.width} />
                    </Box>
                  </Tooltip>
                ))}
              </Box>
              <Text fontSize={{ base: "12px", md: "14px" }} textAlign="left">
                {t("learnMoreProject")}
              </Text>
              <Box display="flex" flexDirection="row" gap="15px" pb="30px">
                <Button
                  bg="linear-gradient(90deg, #6C63FF 0%, #B60000 100%)"
                  color="white"
                  px="20px"
                  py="10px"
                  minW="120px"
                  borderRadius="md"
                  gap="12px"
                  as="a"
                  href={project.projectWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon as={FaArrowUpRightFromSquare} />
                  {t("projectWebsite")}
                </Button>
                <Button
                  border={`1px solid ${repoButtonBorderColor}`}
                  color={repoButtonTextColor}
                  backgroundColor="transparent"
                  px="20px"
                  py="10px"
                  minW="120px"
                  borderRadius="md"
                  display="flex"
                  alignItems="center"
                  gap="12px"
                  as="a"
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon as={FaGithub} />
                  {t("repo")}
                </Button>
              </Box>
              <Text fontSize={{ base: "12px", md: "14px" }} textAlign="left">{t("teamMembers")}</Text>
              <Text fontSize={{ base: "12px", md: "14px" }} textAlign="left">
                {project.teamMembers}
              </Text>
            </VStack>
          </Box>

          {/* Lado Direito */}
          <Box
            width="50%"
            padding="15px"
            color={colorMode === "light" ? "black" : "white"}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            borderRadius="15px"
          >
            <Image src={project.imageSrc} alt={project.imageAlt} pr="40px" />
          </Box>
        </Box>
      </Flex>
    );
  };

  return (
    <div className="container" style={{ width: '100%', padding: '20px', boxSizing: 'border-box' }}>
      <Flex
        direction="column"
        align="center"
        justify="center"
        minHeight="100vh"
        width="100%"
      >
        <div className="title">Projects</div>
        <ToolBar />
        <Swiper
          effect={'cube'}
          grabCursor={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}
          loop={false}
          pagination={{ dynamicBullets: true }}
          modules={[EffectCube, Pagination]}
          className="mySwiper"
          style={{ width: '100%', maxWidth: '1060px'}} 
        >
          {projectData.map((project, index) => (
            <SwiperSlide key={index}>
              <Slide project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
        <Footer />
      </Flex>
    </div>
  );
};

export default Projects;
