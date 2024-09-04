import { useState, useEffect } from 'react';
import { Box, Text } from '@chakra-ui/react';

const RealTimeClock = () => {
  const [dateTime, setDateTime] = useState({
    day: '00',
    month: '00',
    year: '0000',
    hours: '00',
    minutes: '00',
    seconds: '00',
    centiseconds: '00',
  });

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setDateTime({
        day: String(now.getDate()).padStart(2, '0'), // Dia do mês
        month: String(now.getMonth() + 1).padStart(2, '0'), // Mês (Janeiro é 0)
        year: now.getFullYear(), // Ano
        hours: String(now.getHours()).padStart(2, '0'), // Hora local
        minutes: String(now.getMinutes()).padStart(2, '0'), // Minutos locais
        seconds: String(now.getSeconds()).padStart(2, '0'), // Segundos locais
        centiseconds: String(Math.floor(now.getMilliseconds() / 10)).padStart(2, '0'), // Centésimos de segundo locais
      });
    };

    const intervalId = setInterval(updateClock, 10); // Atualiza a cada 10ms para incluir centésimos de segundo

    return () => clearInterval(intervalId); // Limpa o intervalo quando o componente é desmontado
  }, []);

  return (
    <Box display="flex" flexDirection="row" textAlign="center" color="white" gap="10px" alignItems="center" justifyContent="center" marginTop="10px">
      <Text fontSize="12px" fontWeight="regular">
        {dateTime.day}/{dateTime.month}/{dateTime.year}
      </Text>
      <Text fontSize="12px" fontWeight="regular">
        {dateTime.hours}:{dateTime.minutes}:{dateTime.seconds}:{dateTime.centiseconds}
      </Text>
    </Box>
  );
};

export default RealTimeClock;
