import { useEffect, useState} from "react";
import { Box, Flex, useColorMode, Image, Text, VStack, Button, Icon, useColorModeValue } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';
import { PiCertificate } from "react-icons/pi";
import ToolBar from "../components/ToolBar";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';

/*Importacao Imagens dos Certificados*/
import BootcampSantander from '../img/Certificado Bootcamp Santander.png';
import Swagger from '../img/Certificado Swagger.png'
import Mongodb from '../img/Certificado Mongodb.png'
import Globo from '../img/Certificado Globo.png'
import Junit from '../img/Certificado Junit.png'
import Python from '../img/Certificado Python.png'
import Git from '../img/Certificado Git.png'
import Poo from '../img/Certificado Fundamentos POO.png'

const Certificates = () => {
  const { t } = useTranslation();
  const { colorMode } = useColorMode();

  // Dados dos certificados
  const certificateData = [
    {
      title: "Bootcamp Santander 2024 - Backend Java",
      issuer: "Santander & DIO",
      imageSrc: BootcampSantander, 
      imageAlt: "Certificado Java",
      date: "07/2024",
      link: "https://hermes.dio.me/certificates/TMSQXYZT.pdf",
    },
    {
      title: t("certificate2"),
      issuer: "DIO",
      imageSrc: Swagger,
      imageAlt: "Certificado Swagger",
      date: "07/2024",
      link: "https://hermes.dio.me/certificates/VRKJBRGI.pdf",
    },
    {
      title: "Hackaton Globo Rec'nplay",
      issuer: "Globo",
      imageSrc: Globo,
      imageAlt: "Certificado Hackaton",
      date: "10/2023",
      link: "https://drive.google.com/file/d/1Dw4UsGl-nAQfdfagu_3fyh9P8pe8ttYx/view?usp=sharing",
    },
    {
      title: t("certificate4"),
      issuer: "Alura",
      imageSrc: Git,
      imageAlt: "Certificado de Git",
      date: "01/2024",
      link: "https://cursos.alura.com.br/certificate/gabrielhilins/git-github-compartilhando-colaborando-projetos",
    },
    {
      title: t("certificate5"),
      issuer: "DIO",
      imageSrc: Poo,
      imageAlt: "Certificado de Java",
      date: "07/2024",
      link: "https://hermes.dio.me/certificates/SAOG4YMV.pdf",
    },
    {
      title: t("certificate6"),
      issuer: "Alura",
      imageSrc: Mongodb,
      imageAlt: "Certificado de MongoDB",
      date: "01/2024",
      link: "https://cursos.alura.com.br/certificate/gabrielhilins/mongodb-banco-dados-nosql",
    },
    {
      title: t("certificate7"),
      issuer: "DIO",
      imageSrc: Junit,
      imageAlt: "Certificado de Junit",
      date: "07/024",
      link: "https://hermes.dio.me/certificates/MSHUHLJY.pdf",
    },
    {
      title: t("certificate8"),
      issuer: t("bradesco"),
      imageSrc: Python,
      imageAlt: "Certificado de Java Avançado",
      date: "07/024",
      link: "https://drive.google.com/file/d/1LAyAfC8CSS9nShYd-K_5jifqfbZNqzaP/view?usp=sharing",
    },
    
  ];

  // Define border and text color for the certificate button based on color mode
  const certButtonBorderColor = useColorModeValue("black", "white");
  const certButtonTextColor = useColorModeValue("black", "white");

  const [showNavigation, setShowNavigation] = useState(() => window.innerWidth >= 768);
    
    useEffect(() => {
        const handleResize = () => {
            const isSmallScreen = window.innerWidth < 768;
            setShowNavigation(!isSmallScreen);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


  const Slide = ({ certificate }) => {
    return (
      <Flex
        width="100%"
        maxWidth="1060px"
        alignItems="center"
        justifyContent="center"
        overflow="hidden"
        padding="20px"
        height="100%"
        direction="column"
      >
        <Box
          backgroundColor={colorMode === "light" ? "white" : "#1D1C1C"}
          width="100%"
          display="flex"
          height="100%"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          borderRadius="15px"
          padding="20px"
        >
          {/* Imagem do Certificado */}
          <Box width="100%" display="flex" justifyContent="center" mb="20px">
            <Image src={certificate.imageSrc} alt={certificate.imageAlt} maxW="90%" />
          </Box>

          {/* Título e Descrição */}
          <VStack align="center" spacing={4} mb="20px">
            <Text fontSize={{ base: "18px", md: "22px" }} fontWeight="700" textAlign={"center"}>
              {certificate.title}
            </Text>
            <Text fontSize={{ base: "14px", md: "16px" }} fontWeight="500">
              {t("issuedBy")} {certificate.issuer}
            </Text>
            <Text fontSize={{ base: "14px", md: "16px" }} fontWeight="500">
              {t("date")} {certificate.date}
            </Text>
          </VStack>
          
          {/* Botão para Visualizar Certificado */}
          <Button
            border={`1px solid ${certButtonBorderColor}`}
            color={certButtonTextColor}
            backgroundColor="transparent"
            px="20px"
            py="10px"
            minW="120px"
            borderRadius="md"
            display="flex"
            alignItems="center"
            gap="12px"
            as="a"
            href={certificate.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon as={PiCertificate} height="32px" width="32px"></Icon>
            {t("viewCertificate")}
          </Button>
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
        <div className="title">{t("certificates")}</div>
        <ToolBar />
        <Swiper
          effect={'flip'}
          grabCursor={true}
          pagination={true}
          navigation={showNavigation ? {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        } : false}
          modules={[EffectFlip, Pagination, Navigation]}
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          className="mySwiper"
          style={{ width: '100%', maxWidth: '1060px' }}
        >
          {certificateData.map((certificate, index) => (
            <SwiperSlide key={index}>
              <Slide certificate={certificate} />
            </SwiperSlide>
          ))}
        </Swiper>
        {showNavigation && (
                        <>
                            <div className="swiper-button-prev" style={{ color: 'white'}}></div>
                            <div className="swiper-button-next" style={{ color: 'white'}}></div>
                        </>
                    )}
        <Footer />
      </Flex>
    </div>
  );
};

export default Certificates;
