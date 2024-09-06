
import { Box, Heading, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../components/LanguageSwitcher';

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  return (
    <Box p={4}>
        <LanguageSwitcher />
      <Heading mb={4}>{t('privacyPolicyTitle')}</Heading>
      <Text mb={2}>{t('privacyPolicyIntro')}</Text>
      <Heading size="md" mb={2}>{t('usageHeading')}</Heading>
      <Text mb={2}>{t('usageText')}</Text>
      <Heading size="md" mb={2}>{t('advertisingHeading')}</Heading>
      <Text mb={2}>{t('advertisingText')}</Text>
      <Heading size="md" mb={2}>{t('cookiesHeading')}</Heading>
      <Text mb={2}>{t('cookiesText')}</Text>
      <Heading size="md" mb={2}>{t('securityHeading')}</Heading>
      <Text mb={2}>{t('securityText')}</Text>
      <Heading size="md" mb={2}>{t('changesHeading')}</Heading>
      <Text mb={2}>{t('changesText')}</Text>
      <Heading size="md" mb={2}>{t('contactHeading')}</Heading>
      <Text>{t('contactText')}</Text>
    </Box>
  );
};

export default PrivacyPolicy;
