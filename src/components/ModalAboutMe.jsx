/* eslint-disable react/prop-types */
import { 
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    Box,
    Text,
    Image,
    useColorMode
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import MeuVetor from '../img/Vetor Meu.png';

const ModalAboutMe = ({ isOpen, onClose }) => {
    const { i18n } = useTranslation();
    const { colorMode } = useColorMode();
    
    // Definição do texto diretamente no componente para fins de teste
    const paragraphs = i18n.language === 'en'
        ? [
            "👋 Hello, I'm Gabriel Henrique, a 19-year-old from Recife studying Systems for the Internet at UNICAP. I completed my High School education at the Military School of Recife (CMR), which laid the foundation for my passion in innovation.",
            "👨‍💻 I'm a Full Stack developer in training with an interest in Java, React & more! In my free time, I enjoy listening to music🎧, watching movies🍿, playing sports⚽🏀, and working out💪.",
            "🤓 I'm looking for my first professional opportunity in the field of Technology and Innovation. My goal is to participate in impactful projects, always learning and contributing to a collaborative and innovative environment.",
            "💭 My dream is to inspire others to continuously improve and make a difference. If you are looking for someone passionate and dedicated, I am ready to chat!📲"
        ]
        : [
            "👋 Olá, sou Gabriel Henrique, um pernambucano de Recife com 19 anos, cursando Sistemas para Internet na UNICAP. Conluí meu Ensino Médio no Colégio Militar do Recife (CMR), o que foi fundamental para despertar miha paixão por inovação.",
            "👨‍💻 Sou um desenvolvedor Full Stack em formação com interesse em Java, React e mais! Nos meus momentos livres, gosto de escutar música🎧, assistir filmes🍿, praticar esportes⚽🏀 e frequentar a academia💪.",
            "🤓 Estou em busca da minha primeira oportunidade profissional na área de Tecnologia e Inovação. Meu objetivo é participar de projetos impactantes, sempre aprendendo e contribuindo para um ambiente colaborativo e inovador.",
            "💭 Meu sonho é inspirar outros a melhorar continuamente e fazer a diferença. Se você procura alguém apaixonado e dedicado, estou pronto para conversar!📲"
        ];

        const backgroundColor = colorMode === 'light' ? 'white' : '#1D1C1C';
    return (
        <Modal isOpen={isOpen} onClose={onClose} size="xl">
            <ModalOverlay />
            <ModalContent maxW="90vw" maxH="90vh" height="80vh" bg={backgroundColor}>
                <ModalHeader textAlign="center">{i18n.language === 'en' ? 'About Me' : 'Sobre Mim'}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Box display="flex" flexDirection={{ base: 'column', md: 'row' }} alignItems="center">
                        
                        <Box
                            p={{ base: '2', md: '4' }} 
                            maxWidth={{ base: '80%', md: '60%' }} 
                            mx="auto" 
                        >
                            {paragraphs.map((paragraph, index) => (
                                <Text
                                    key={index}
                                    fontSize={{ base: '10px', md: '12px' }} 
                                    mb="2" 
                                    textAlign="justify"
                                    marginBottom="30px"
                                >
                                    {paragraph}
                                </Text>
                            ))}
                        </Box>

                        
                        <Image
                            boxSize={{ base: '400px', md: '480px' }} 
                            src={MeuVetor} 
                            alt={i18n.language === 'en' ? 'My picture' : 'Minha foto'}
                            m={{ base: '4', md: '0' }}
                        />
                    </Box>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default ModalAboutMe;
