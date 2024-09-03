import { Image, Flex, Tooltip } from '@chakra-ui/react';
import Brazil from '../img/brazilflag.png';
import Usa from '../img/usaflag.png';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.language;

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Flex>
      {currentLanguage === 'pt' && (
        <Tooltip label={t('en')} placement="top">
          <Image
            src={Usa}
            alt="Ícone EUA"
            height="32px"
            width="32px"
            marginBottom={{ base: "10px", sm: "0" }}
            marginRight={{ sm: "10px" }}
            onClick={() => handleLanguageChange('en')}
            cursor="pointer"
          />
        </Tooltip>
      )}
      {currentLanguage === 'en' && (
        <Tooltip label={t('pt')}>
          <Image
            src={Brazil}
            alt="Ícone Brasil"
            height="32px"
            width="32px"
            marginBottom={{ base: "10px", sm: "0" }}
            onClick={() => handleLanguageChange('pt')}
            cursor="pointer"
          />
        </Tooltip>
      )}
    </Flex>
  );
};

export default LanguageSwitcher;
