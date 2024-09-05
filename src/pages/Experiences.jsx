import { useTranslation } from "react-i18next";
import ToolBar from "../components/ToolBar";
import Footer from "../components/Footer";
import { Box, VStack, Image, useColorMode } from '@chakra-ui/react'; 
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Cesar from '../img/cesar.png';
import Porto from '../img/porto.png';
import Rec from '../img/rec_n_play_logo 1.png';
import Tpf from '../img/tpfengenharia_logo 1.png';
import './Experiences.css';
import './Pagination.css'

const Timeline = () => {
  const { colorMode } = useColorMode(); 
  const {t } = useTranslation();

  const dateStyle = {
    color: colorMode === "light" ? "black" : "white" 
  };

  return (
    <Box width="100%" maxWidth="1800px" minWidth="320px" mx="auto" px={4} py={8}>
      <VStack spacing={9} align="stretch">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jun 2024"
            icon={<Image
              src={Tpf}
              alt="Descrição da imagem"
              className="timeline-icon"
            />}
            contentStyle={{
              background: colorMode === "light" ? "white" : "#333",
              color: colorMode === "light" ? "black" : "white",   
              border: colorMode === "light" ? "2px solid black" : "2px solid white" 
            }}
            contentArrowStyle={{
              borderRight: colorMode === "light" ? "7px solid white" : "7px solid #333"
            }}
          >
            <div className="timeline-element-content">
              <h3 className="timeline-element-title">{t("residencia_software_growup")}</h3>
              <h4 className="timeline-element-subtitle">TPF Engenharia</h4>
              <p>{t("low_code_teamwork_scrum")}</p>
              <span className="timeline-element-date" style={dateStyle}>03/2024 - 06/2024</span>
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Dez 2023"
            icon={<Image
              src={Cesar}
              alt="Descrição da imagem"
              className="timeline-icon"
            />}
            contentStyle={{
              background: colorMode === "light" ? "white" : "#333",
              color: colorMode === "light" ? "black" : "white",
              border: colorMode === "light" ? "2px solid black" : "2px solid white"
            }}
            contentArrowStyle={{
              borderRight: colorMode === "light" ? "7px solid white" : "7px solid #333"
            }}
          >
            <div className="timeline-element-content">
              <h3 className="timeline-element-title">{t("residencia_software_riseup")}</h3>
              <h4 className="timeline-element-subtitle">CESAR</h4>
              <p>{t("qa_qc_pitch")}</p>
              <span className="timeline-element-date" style={dateStyle}>09/2023 - 12/2023</span>
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Out 2023"
            icon={<Image
              src={Rec}
              alt="Descrição da imagem"
              className="timeline-icon"
            />}
            contentStyle={{
              background: colorMode === "light" ? "white" : "#333",
              color: colorMode === "light" ? "black" : "white",
              border: colorMode === "light" ? "2px solid black" : "2px solid white"
            }}
            contentArrowStyle={{
              borderRight: colorMode === "light" ? "7px solid white" : "7px solid #333"
            }}
          >
            <div className="timeline-element-content">
              <h3 className="timeline-element-title">{t("voluntariado_recnplay")}</h3>
              <h4 className="timeline-element-subtitle">Rec'n'play</h4>
              <p>{t("event_reception")}</p>
              <span className="timeline-element-date" style={dateStyle}>10/2023</span>
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jun 2023"
            icon={<Image
              src={Porto}
              alt="Descrição da imagem"
              className="timeline-icon"
            />}
            contentStyle={{
              background: colorMode === "light" ? "white" : "#333",
              color: colorMode === "light" ? "black" : "white",
              border: colorMode === "light" ? "2px solid black" : "2px solid white"
            }}
            contentArrowStyle={{
              borderRight: colorMode === "light" ? "7px solid white" : "7px solid #333"
            }}
          >
            <div className="timeline-element-content">
              <h3 className="timeline-element-title">{t("residencia_kickoff_embarque")}</h3>
              <h4 className="timeline-element-subtitle">Porto Digital</h4>
              <p>{t("public_speaking_figma")}</p>
              <span className="timeline-element-date" style={dateStyle}>05/2023 - 06/2023</span>
            </div>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </VStack>
    </Box>
  );
};

const Experiences = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
        <div className="title">{t("experiences")}</div>
        <ToolBar />
        <Box width="100%" maxWidth="1400px" minWidth="320px" mx="auto" px={4} py={8}>
        <Timeline />
        <Footer />
    </Box>
      </div>
  );
};

export default Experiences;
