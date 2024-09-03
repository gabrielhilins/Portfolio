import { useEffect } from 'react';
import { useColorMode } from '@chakra-ui/react';

const useColorModeBasedOnTime = () => {
  const { setColorMode } = useColorMode();

  useEffect(() => {
    const updateColorMode = () => {
      const currentHour = new Date().getHours();
      if (currentHour >= 18 || currentHour < 6) { // 18:00 (6 PM) a 06:00 (6 AM)
        setColorMode('dark');
      } else {
        setColorMode('light');
      }
    };

    updateColorMode(); // Define o modo de cor baseado na hora atual
    const interval = setInterval(updateColorMode, 60000); // Atualiza a cada minuto

    return () => clearInterval(interval); // Limpeza do intervalo ao desmontar o componente
  }, [setColorMode]);
};

export default useColorModeBasedOnTime;
