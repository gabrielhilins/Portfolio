import { Box, Button, useColorModeValue } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const SoftSkills = () => {

    const { t, i18n } = useTranslation();

    const skills = [
        t("creative"),
        t("problemSolver"),
        t("resilient"),
        t("continuousLearning"),
        t("projectManagement"),
        t("assertiveCommunicator"),
        t("publicSpeech")
      ];

  return (
    <Box
      display="flex"
      flexWrap="wrap"
      gap="10px"
      justifyContent="center"
      animation="floating 3s ease-in-out infinite"
    >
      {skills.map((skill, index) => (
        <Button
          key={index}
          width={{ base: "100%", sm: "48%" }}
          borderRadius="15px"
          backgroundColor={useColorModeValue("gray.300", "gray.600")}
          color={useColorModeValue("black", "white")}
          mb="10px"
          _hover={{
            backgroundColor: useColorModeValue("gray.400", "gray.500"),
          }}
          fontSize="14px"
        >
          {skill}
        </Button>
      ))}
    </Box>
  );
};

export default SoftSkills;
