import { Box, Icon, Link, Tooltip } from "@chakra-ui/react";
import { Link as RouterLink } from 'react-router-dom';
import LanguageSwitcher from "./LanguageSwitcher";
import { FaHome } from "react-icons/fa";
import ColorModeSwitcher from "./ColorModeSwitcher";
import { t } from "i18next";

const ToolBar = () => { 
    return (
        <Box
            display="flex"
            flexDirection="row"
            gap="40px"
            justifyContent="center"
            alignItems="center"
            marginTop="20px"
        >
            <Tooltip label={t("home")} aria-label={t("home")}>
                <Link as={RouterLink} to="/">
                    <Icon
                        as={FaHome}
                        height="32px"
                        width="32px"
                    />
                </Link>
            </Tooltip>
            
            <LanguageSwitcher />
            <ColorModeSwitcher />
        </Box>
    )
}

export default ToolBar;
