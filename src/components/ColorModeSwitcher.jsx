import { Box, Icon, Tooltip, useColorMode } from '@chakra-ui/react';
import { BsMoonStars, BsSun } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';

const ColorModeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { t } = useTranslation();

  return (
    <Box>
      <Tooltip 
        label={colorMode === "light" ? t("darkMode") : t("lightMode")}
        placement="top"
      >
        <Box as="span">
          <Icon
            as={colorMode === "light" ? BsMoonStars : BsSun}
            onClick={toggleColorMode}
            cursor="pointer"
            height="24px"
            width="24px"
          />
        </Box>
      </Tooltip>
    </Box>
  );
};

export default ColorModeSwitcher;
