import { Box, Heading, Text, Alert, AlertIcon, AlertTitle, AlertDescription, Flex } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import ToolBar from '../components/ToolBar';


function PrivacyPolicy() {
  const { t } = useTranslation();

  return (
    <Box p={4} display="flex" flexDirection="column" justifyContent="center">
      
      <Flex 
      justifyContent="center"
      >
        <ToolBar />
      </Flex>
      <Alert status="info" mb={4}>
        <AlertIcon />
        <Box flex="1">
          <AlertTitle>{t('adsenseAlertTitle')}</AlertTitle>
          <AlertDescription display="block">
            {t('adsenseAlertDescription')}
          </AlertDescription>
        </Box>
      </Alert>
      <Heading mb={4}>{t('privacyPolicyTitle')}</Heading>
      <Text mb={2} textAlign="justify">{t('privacyPolicyIntro')}</Text>
      <Heading size="md" mb={2}>{t('usageHeading')}</Heading>
      <Text mb={2} textAlign="justify">{t('usageText')}</Text>
      <Heading size="md" mb={2}>{t('advertisingHeading')}</Heading>
      <Text mb={2} textAlign="justify">{t('advertisingText')}</Text>
      <Heading size="md" mb={2}>{t('cookiesHeading')}</Heading>
      <Text mb={2} textAlign="justify">{t('cookiesText')}</Text>
      <Heading size="md" mb={2}>{t('securityHeading')}</Heading>
      <Text mb={2} textAlign="justify">{t('securityText')}</Text>
      <Heading size="md" mb={2}>{t('changesHeading')}</Heading>
      <Text mb={2} textAlign="justify">{t('changesText')}</Text>
      <Heading size="md" mb={2}>{t('contactHeading')}</Heading>
      <Text textAlign="justify">{t('contactText')}</Text>
    </Box>
  );
}

export default PrivacyPolicy;
