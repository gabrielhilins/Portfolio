import { Flex, Box, Image, useColorModeValue, Text, Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator } from "@chakra-ui/react";
import { useTranslation } from 'react-i18next';

// Lista das tecnologias divididas por categoria
const techCategories = {
  "Back End": [
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
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
      alt: "Node.js",
      width: "40px",
      description: "Node.js",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
      alt: "Postman",
      width: "40px",
      description: "Postman",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unifiedmodelinglanguage/unifiedmodelinglanguage-original.svg",
      alt: "UML",
      width: "40px",
      description: "UML",
    },
    // Outras tecnologias de Back End
  ],
  "Front End": [
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      alt: "React",
      width: "40px",
      description: "React",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      alt: "TypeScript",
      width: "40px",
      description: "TypeScript",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      alt: "JavaScript",
      width: "40px",
      description: "JavaScript",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original-wordmark.svg",
      alt: "Vercel",
      width: "40px",
      description: "Vercel",
    },
    {
      src:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      alt: "Next.js",
      width: "40px",
      description: "Next.js",
    },
    {
      src:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      alt: "HTML",
      width: "40px",
      description: "HTML",
    },
    {
      src:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      alt: "CSS",
      width: "40px",
      description: "CSS",
    },
    // Outras tecnologias de Front End
  ],
  "Banco de Dados": [
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg",
      alt: "MongoDB",
      width: "40px",
      description: "MongoDB",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg",
      alt: "PostgreSQL",
      width: "40px",
      description: "PostgreSQL",
    },
    // Outras tecnologias de Banco de Dados
  ],
  "Outras": [
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
      alt: "Git",
      width: "40px",
      description: "Git",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
      alt: "Github",
      width: "40px",
      description: "Github",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg",
      alt: "Python",
      width: "40px",
      description: "Python",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
      alt: "Figma",
      width: "40px",
      description: "Figma",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
      alt: "Flutter",
      width: "40px",
      description: "Flutter",
    },
    // Outras tecnologias em geral
  ],
};

const TechLogos = () => {
  const { t } = useTranslation();

  return (
    <Tabs position="relative" variant='enclosed'>
      <TabList display="flex" justifyContent="space-between">
        {Object.keys(techCategories).map((category, index) => (
          <Tab  _selected={{color: "#FF6868", borderColor: "gray.500"}} key={index}>{t(category)} </Tab>
        ))}
      </TabList>
      <TabIndicator mt="-1.5px" height="2px" bgColor="#FF6868" borderColor="gray.500" borderRadius="1px" />
      <TabPanels>
        {Object.values(techCategories).map((technologies, index) => (
          <TabPanel key={index}>
            <Box display="flex" flexWrap="wrap" gap="10px" justifyContent="center">
              {technologies.map((tech, techIndex) => (
                <Box
                  key={techIndex}
                  width={{ base: "100%", sm: "48%" }}
                  borderRadius="15px"
                  mb="10px"
                  p="10px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  _hover={{
                    bg: useColorModeValue("gray.400", "gray.500"),
                  }}
                >
                  <Flex align="center">
                    <Image src={tech.src} alt={tech.alt} width={tech.width} />
                    <Text ml="10px" fontSize={{ base: "12px", md: "14px" }}>
                      {tech.description}
                    </Text>
                  </Flex>
                </Box>
              ))}
            </Box>
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

export default TechLogos;
