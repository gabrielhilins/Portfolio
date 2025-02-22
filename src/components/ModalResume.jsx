
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

  const urlCurriculo = "https://drive.google.com/file/d/1wMj0HJa55gZHaYwfhV_FcUTx48_f0OHB/preview";
  const urlCurriculoEmPdf = "https://drive.google.com/uc?export=download&id=1wOKdpZmpZomUZ5psNd5ZScn3otbN464X";
  
  const urlResume = "https://drive.google.com/file/d/1wOKdpZmpZomUZ5psNd5ZScn3otbN464X/preview";
  const urlResumeInPdf = "https://drive.google.com/uc?export=download&id=1wOKdpZmpZomUZ5psNd5ZScn3otbN464X";

  // Função para obter o URL do currículo com base no idioma
  const getCurriculoURL = () => {
    return i18n.language === 'en' ? urlResume : urlCurriculo;
  };

  const getPdfCurriculoURL = () => {
    return i18n.language === 'en' ? urlResumeInPdf : urlCurriculoEmPdf;
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
