import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { register } from 'swiper/element/bundle';
import { Analytics } from '@vercel/analytics/react';
import theme from './theme.js'
import "./App.css"
import './i18n'


register();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
     <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
       <App />
       <Analytics />
     </ChakraProvider>
    </BrowserRouter>
  </StrictMode>,
)
