import { Box, Button, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import LanguageSwitcher from "../components/LanguageSwitcher";

function Pag404() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/"); // Redireciona para a home
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      textAlign="center"
      bg="#f8f9fa"
      padding="2rem"
    >
      <LanguageSwitcher />
      <Text fontSize="6xl" fontWeight="bold" color="#500000">
        404
      </Text>
      <Text fontSize="2xl" color="#6c757d" mb="4">
        {t("pageNotFound")} 
      </Text>
      <Text fontSize="lg" color="#6c757d" mb="4">
        {t("comedyText")} 
      </Text>
      <Text fontSize="lg" color="#6c757d" mb="4">
        {t("comedyTextContinuation")} 
      </Text>
      <Button
        colorScheme="teal"
        onClick={handleHomeClick}
        mt="4"
        bg="linear-gradient(90deg, #6C63FF 0%, #B60000 100%)"
        color="white"
        _hover={{
          bg: "green.500",
          color: "white",
          transition: "background-color 0.3s ease",
        }}
      >
        {t("home404")}
      </Button>
    </Box>
  );
}

export default Pag404;
