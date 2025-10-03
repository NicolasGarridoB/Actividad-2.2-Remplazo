import type { MetaFunction } from "react-router";
import { HomeLayout, MainBanner, InfoSection } from "../../components";

export const meta: MetaFunction = () => {
  return [
    { title: "Mi Sitio Web - Inicio" },
    { name: "description", content: "Bienvenido a nuestro sitio web" },
  ];
}

export default function Home() {
  const infoItems = [
    {
      title: "Innovación",
      description: "Utilizamos las últimas tecnologías para crear soluciones innovadoras que impulsen tu negocio hacia el futuro.",
      imageSrc: "/assets/bg_card_1.png",
      imageAlt: "Innovación"
    },
    {
      title: "Calidad",
      description: "Nos comprometemos a entregar productos de la más alta calidad, cumpliendo con los estándares más exigentes.",
      imageSrc: "/assets/bg_card_2.png",
      imageAlt: "Calidad"
    },
    {
      title: "Soporte",
      description: "Nuestro equipo de soporte está disponible 24/7 para ayudarte en cualquier momento que lo necesites.",
      imageSrc: "/assets/bg_card_3.png",
      imageAlt: "Soporte"
    }
  ];

  const handlePrimaryClick = () => {
    console.log('Botón primario clickeado');
  };

  const handleSecondaryClick = () => {
    console.log('Botón secundario clickeado');
  };

  return (
    <HomeLayout>
      <MainBanner
        subtitle="Bienvenido a"
        title="Mi Sitio Web"
        description="Creamos experiencias digitales excepcionales que transforman ideas en realidad. Descubre cómo podemos ayudarte a alcanzar tus objetivos."
        primaryButtonText="Comenzar Ahora"
        secondaryButtonText="Saber Más"
        onPrimaryClick={handlePrimaryClick}
        onSecondaryClick={handleSecondaryClick}
        backgroundImage="/assets/bg_main_card.png"
      />
      
      <InfoSection
        subtitle="Nuestros Valores"
        title="¿Por qué elegirnos?"
        items={infoItems}
      />
    </HomeLayout>
  );
}
