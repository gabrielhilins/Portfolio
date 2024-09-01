import { Box, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Box
      as="footer"
      padding="20px"
      textAlign="center"
      color="white"
    >
      <Text
        fontSize={{ base: "16px", sm: "18px" }}
        fontWeight="400"
        paddingTop="100px"
      >
        {t("copyright")}
      </Text>
      <Text
        fontSize={{ base: "14px", sm: "16px" }}
        fontWeight="300"
        paddingTop="10px"
      >
        {t("thanks")}
      </Text>
    </Box>
  );
};

export default Footer;
