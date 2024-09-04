import { useState, useEffect } from 'react';
import { Box, Text } from '@chakra-ui/react';

const RealTimeClock = () => {
  const [dateTime, setDateTime] = useState({
    date: '',
    hours: '00',
    minutes: '00',
    seconds: '00',
    centiseconds: '00',
    period: 'AM',
  });

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();

      // Formatação da data baseada na localização do usuário
      const formattedDate = new Intl.DateTimeFormat(navigator.language, {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      }).format(now);

      // Formatação da hora com AM/PM
      const hours12 = now.getHours() % 12 || 12; // Converte para formato 12 horas
      const period = now.getHours() >= 12 ? 'PM' : 'AM'; // Determina AM ou PM

      setDateTime({
        date: formattedDate, // Data formatada conforme a localização do usuário
        hours: String(hours12).padStart(2, '0'), // Hora em formato 12 horas
        minutes: String(now.getMinutes()).padStart(2, '0'), // Minutos locais
        seconds: String(now.getSeconds()).padStart(2, '0'), // Segundos locais
        centiseconds: String(Math.floor(now.getMilliseconds() / 10)).padStart(2, '0'), // Centésimos de segundo locais
        period, // AM ou PM
      });
    };

    const intervalId = setInterval(updateClock, 10); // Atualiza a cada 10ms para incluir centésimos de segundo

    return () => clearInterval(intervalId); // Limpa o intervalo quando o componente é desmontado
  }, []);

  return (
    <Box display="flex" flexDirection="row" textAlign="center" color="white" gap="10px" alignItems="center" justifyContent="center" marginTop="10px">
      <Text fontSize="12px" fontWeight="regular">
        {dateTime.date}
      </Text>
      <Text fontSize="12px" fontWeight="regular">
        {dateTime.hours}:{dateTime.minutes}:{dateTime.seconds}:{dateTime.centiseconds}: {dateTime.period}
      </Text>
    </Box>
  );
};

export default RealTimeClock;
