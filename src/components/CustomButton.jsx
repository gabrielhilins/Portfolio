import { Button } from '@chakra-ui/react';

const CustomButton = ({ href, hoverBackgroundColor, hoverBorderColor, children }) => (
  <Button
    bg="linear-gradient(90deg, #6C63FF 0%, #B60000 100%)"
    color="white"
    px={{ base: "8px", sm: "12px", md: "20px" }}
    py={{ base: "4px", sm: "6px", md: "10px" }}
    minW={{ base: "120px", md: "160px" }}
    borderRadius="md"
    gap="8px"
    as="a"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    width={{ base: "60px", sm: "100px", md: "160px" }}
    fontSize={{ base: "12px", sm: "14px", md: "16px" }}
    _hover={{
      bg: hoverBackgroundColor, // Cor de fundo no hover
      color: hoverBorderColor, // Cor do texto no hover
      border: "1px solid",
      borderColor: hoverBorderColor, // Cor da borda no hover
    }}
  >
    {children}
  </Button>
);

export default CustomButton;
