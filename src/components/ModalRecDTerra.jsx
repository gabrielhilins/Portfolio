import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Button,
  } from "@chakra-ui/react";
  import { useTranslation } from "react-i18next";
  import { useEffect } from "react";
  
  const ModalRecDaTerra = ({ isOpen, onClose }) => {
    const { t } = useTranslation();
  
    useEffect(() => {
      if (isOpen) {
        document.body.classList.add('modal-open');
      } else {
        document.body.classList.remove('modal-open');
      }
      return () => {
        document.body.classList.remove('modal-open');
      };
    }, [isOpen]);
  
    const handleRedirect = () => {
      window.open("https://www.linkedin.com/feed/update/urn:li:ugcPost:7237646199963480065", "_blank");
    };
  
    return (
      <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="inside">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">{t("postLinkedin")}</ModalHeader>
          <ModalCloseButton />
          <ModalBody display="flex" justifyContent="center" p={0} overflow="hidden">
            <iframe
              src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7237646199963480065"
              height="600"
              width="100%"
              frameBorder="0"
              allowFullScreen
              title="Publicação incorporada"
              style={{ overflow: "auto", border: "none" }}
            />
          </ModalBody>
          <ModalFooter display="flex" justifyContent="center">
            <Button colorScheme="blue" onClick={handleRedirect}>
              {t("viewPost")}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  };
  
  export default ModalRecDaTerra;
  