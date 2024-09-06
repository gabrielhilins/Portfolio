import { useEffect } from 'react';

const AdSenseAd = () => {
  useEffect(() => {
    // Adicionar o script do Google AdSense ao carregar o componente
    const script = document.createElement('script');
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${import.meta.env.VITE_AD_CLIENT_ID}`;
    script.async = true;
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);

    // Configurar o AdSense após o script carregar
    script.onload = () => {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    };

    // Limpar o script quando o componente for desmontado
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="adsense-container">
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={import.meta.env.VITE_AD_CLIENT_ID}
        data-ad-slot={import.meta.env.VITE_AD_SLOT_ID}
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default AdSenseAd;
