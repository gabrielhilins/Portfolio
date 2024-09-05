import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  useToast,
  VStack,
  FormErrorMessage,
  Spinner,
} from "@chakra-ui/react";
import emailjs from '@emailjs/browser';
import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { IoPersonOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { MdLabelImportantOutline } from "react-icons/md";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const form = useRef();
  const toast = useToast();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name) newErrors.name = t("nameRequired");
    if (!email) {
      newErrors.email = t("emailRequired");
    } else if (!emailRegex.test(email)) {
      newErrors.email = t("invalidEmailFormat");
    }
    if (!message) newErrors.message = t("messageRequired");
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID, 
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
      {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then((response) => {
      toast({
        title: t("formSent"),
        description: t("descriptionForm"),
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      setName("");
      setEmail("");
      setSubject("");
      setMessage("");

      setLoading(false);
      navigate("/");
    })
    .catch((error) => {
      setLoading(false);
      toast({
        title: t("sendEmailError"),
        description: t("descriptionError"),
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      console.error('Error sending email:', error);
    });
  };

  return (
    <Box maxWidth="500px" mx="auto" p={4}>
      <form ref={form} onSubmit={handleSubmit} noValidate> {/* Adiciona noValidate aqui */}
        <VStack spacing={4} align="stretch">
          <FormControl id="name" isRequired isInvalid={!!errors.name}>
            <FormLabel>{t("nameForm")}</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Icon as={IoPersonOutline} color="#B60000"/>
              </InputLeftElement>
              <Input
                type="text"
                value={name}
                placeholder={t("yourName")}
                fontSize={{base: "13px", md: "16px"}}
                errorBorderColor="red.300"
                autoComplete="off"
                onChange={(e) => setName(e.target.value)}
              />
            </InputGroup>
            <FormErrorMessage>{errors.name}</FormErrorMessage>
          </FormControl>

          <FormControl id="email" isRequired isInvalid={!!errors.email}>
            <FormLabel>Email</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Icon as={IoMailOutline} color="#B60000"/>
              </InputLeftElement>
              <Input
                type="email"
                value={email}
                placeholder={t("yourEmail")}
                fontSize={{base: "13px", md: "16px"}}
                errorBorderColor="red.300"
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputGroup>
            <FormErrorMessage>{errors.email}</FormErrorMessage>
          </FormControl>

          <FormControl id="subject">
            <FormLabel>{t("subject")}</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Icon as={MdLabelImportantOutline} color="#B60000"/>
              </InputLeftElement>
              <Input
                type="text"
                value={subject}
                placeholder={t("yourSubject")}
                fontSize={{base: "13px", md: "16px"}}
                errorBorderColor="red.300"
                autoComplete="off"
                onChange={(e) => setSubject(e.target.value)}
              />
            </InputGroup>
          </FormControl>

          <FormControl id="message" isRequired isInvalid={!!errors.message}>
            <FormLabel>{t("messageForm")}</FormLabel>
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={t("yourMessage")}
              fontSize={{base: "13px", md: "16px"}}
              rows={6}
              border="1px solid black"
              autoComplete="off"
              errorBorderColor="red.300"
            />
            <FormErrorMessage>{errors.message}</FormErrorMessage>
          </FormControl>

          <Button
            bg="linear-gradient(90deg, #6C63FF 0%, #B60000 100%)"
            color="white"
            _hover={{
              bg: "green.500", 
              color: "white",
              transition: "background-color 0.3s ease",
            }}
            type="submit"
            isDisabled={loading}
          >
            {loading ? <Spinner size="sm" /> : t("submit")}
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default ContactForm;
