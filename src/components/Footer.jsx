import { Box, Text, Link } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import RealTimeClock from "./RealTimeClock";
import AdSenseAd from "./AdSense1";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <>
      <Box
        as="footer"
        padding="30px"
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
        <Text
          fontSize="10px"
          fontWeight="300"
          paddingTop="20px"
        >
          <Link as={RouterLink} to="/privacy-policy">
            {t("privacyPolicy")}
          </Link>
        </Text>
        <RealTimeClock />
      </Box>
      <AdSenseAd />
    </>
  );
};

export default Footer;
