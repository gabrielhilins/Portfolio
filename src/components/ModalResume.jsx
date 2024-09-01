
import { 
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const ModalResume = ({ isOpen, onClose }) => {
  const { t, i18n } = useTranslation();

  const curriculoPTURL = "https://docs.google.com/document/d/1sc9UWKLyZEcTQIUAUYoWo0BrBVBuwwtoE7-M7I8bxDk/pub?embedded=true";
  const pdfCurriculoPTURL = "https://docs.google.com/document/d/1sc9UWKLyZEcTQIUAUYoWo0BrBVBuwwtoE7-M7I8bxDk/export?format=pdf";
  
  const curriculoENURL = "https://docs.google.com/document/d/1sSgFU1u_diYgDnnpqVwuKLdlw5nwr7wee0tjY90Swsk/pub?embedded=true";
  const pdfCurriculoENURL = "https://docs.google.com/document/d/1sSgFU1u_diYgDnnpqVwuKLdlw5nwr7wee0tjY90Swsk/export?format=pdf";

  // Função para obter o URL do currículo com base no idioma
  const getCurriculoURL = () => {
    return i18n.language === 'en' ? curriculoENURL : curriculoPTURL;
  };

  const getPdfCurriculoURL = () => {
    return i18n.language === 'en' ? pdfCurriculoENURL : pdfCurriculoPTURL;
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent maxW="70vw" maxH="90vh" height="80vh">
        <ModalHeader>{i18n.language === 'en' ? 'Resume (EN-US)' : 'Currículo (PT-BR)'}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <iframe
            src={getCurriculoURL()}
            width="100%"
            height="100%"
            title="Currículo"
          />
        </ModalBody>
        <ModalFooter
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Button 
            colorScheme="red" 
            onClick={() => window.open(getPdfCurriculoURL(), '_blank')}
          >
            {t('pdf')}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalResume;
