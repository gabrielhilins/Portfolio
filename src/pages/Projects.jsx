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

/* Importação dos Ícones*/
import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

/*Importação dos Componentes*/
import ToolBar from "../components/ToolBar";
import Footer from "../components/Footer";

/*Importação das Imagens*/
import MockupRec from "../img/Mockup RecDaTerra.png";
import MockupMarvel from "../img/Mockup Marvel.png";
import MockupCaremind from "../img/Mockup Caremind.png";
import MockupINEP from "../img/Mockup INEP.png";

/*Importação da estilização da Paginação do Swiper*/
import "./Pagination.css";

const Projects = () => {
  const { t } = useTranslation();
  const { colorMode } = useColorMode();

  const projectData = [
    {
      title: t("marvel"),
      description: t("nameProject"),
      summary: t("summaryMarvel"),
      imageSrc: MockupMarvel,
      imageAlt: "Mockup do Projeto Marvel Characters",
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
  ];

  const repoButtonBorderColor = useColorModeValue("black", "white");
  const repoButtonTextColor = useColorModeValue("black", "white");

  const bgHover = useColorModeValue("black", "white");
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
                p={5}
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
                {project.techUsed.map(
                  (
                    logo,
                    index // mapeando as tecnologias usadas atraves da logo e a posicao de cada uma (ndex)
                  ) => (
                    <Tooltip
                      key={index}
                      label={logo.description}
                      aria-label={logo.description}
                    >
                      <Box display="flex" alignItems="center">
                        <img src={logo.src} alt={logo.alt} width={logo.width} />
                      </Box>
                    </Tooltip>
                  )
                )}
              </Box>
              <Text fontSize={{ base: "10px", md: "14px" }}>
                {t("learnMoreProject")}
              </Text>
              <Box
                display="flex"
                flexDirection="row"
                gap="15px"
                pb="30px"
                justifyContent="center"
                p="5"
              >
                <Button
                  bg="linear-gradient(90deg, #6C63FF 0%, #B60000 100%)"
                  color="white"
                  px={{ base: "8px", sm: "12px", md: "20px" }} // padding horizontal para diferentes tamanhos de tela
                  py={{ base: "4px", sm: "6px", md: "10px" }} //  padding vertical
                  minW={{ base: "120px", md: "160px" }} // largura mínima
                  borderRadius="md"
                  gap="8px" // Diminuir o espaço entre o ícone e o texto
                  as="a"
                  href={project.projectWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  width={{ base: "60px", sm: "100px", md: "160px" }} //  largura para diferentes tamanhos de tela
                  fontSize={{ base: "12px", sm: "14px", md: "16px" }}
                  _hover={{
                    bg: "green.500",
                    color: "white",
                  }}
                >
                  <Icon as={FaArrowUpRightFromSquare} />
                  {t("projectWebsite")}
                </Button>
                <Button
                  border={`1px solid ${repoButtonBorderColor}`}
                  color={repoButtonTextColor}
                  backgroundColor="transparent"
                  px={{ base: "8px", sm: "12px", md: "20px" }} // padding horizontal
                  py={{ base: "4px", sm: "6px", md: "10px" }} // padding vertical
                  minW={{ base: "100px", md: "160px" }} // largura mínima
                  borderRadius="md"
                  display="flex"
                  alignItems="center"
                  gap="8px" // Diminuir o espaço entre o ícone e o texto
                  as="a"
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  fontSize={{ base: "12px", sm: "14px", md: "16px" }}
                  _hover={{
                    backgroundColor: bgHover,
                    color: textColorHover,
                    borderColor: borderColorHover,
                  }}
                >
                  <Icon as={FaGithub} />
                  {t("repo")}
                </Button>
              </Box>

              <Text fontSize={{ base: "10px", md: "14px" }} paddingTop="20px">
                {t("teamMembers")}
              </Text>
              <Text fontSize={{ base: "10px", md: "14px" }} padding={{base: "15px" , md: "0px"}}>
                {project.teamMembers.split(",").map((name, index) => {
                  const trimmedName = name.trim(); // Remove espaços em branco antes e depois do nome
                  return trimmedName === "Gabriel Henrique" ? ( // Verifica se o nome é "Gabriel Henrique"
                    <strong key={index}>
                      {" "}
                      {/*Se for, renderiza o nome em negrito*/}
                      {trimmedName}
                      {index < project.teamMembers.split(",").length - 1 // Verifica se não é o último nome
                        ? ", " // Se não for o último, adiciona uma vírgula após o nome
                        : ""}
                    </strong>
                  ) : (
                    <span key={index}>
                      {" "}
                      {/*Se não for "Gabriel Henrique", renderiza o nome normalmente*/}
                      {trimmedName}
                      {index < project.teamMembers.split(",").length - 1 // Verifica se não é o último nome
                        ? ", " // Se não for o último, adiciona uma vírgula após o nome
                        : ""}
                    </span>
                  );
                })}
              </Text>
            </VStack>
          </Box>

          {/* Lado Direito */}
          <Box
            width={{ base: "100%", md: "50%" }}
            padding="15px"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            borderRadius="15px"
          >
            <Image
              src={project.imageSrc}
              alt={project.imageAlt}
              width={{ base: "80%", md: "100%" }} // Ajustado para responsividade
              maxWidth="500px"
              height="auto"
            />
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
