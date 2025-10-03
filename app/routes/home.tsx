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
      title: "Introduction to Python Programming",
      description: "Learn the basics of Python and build your first program.",
      imageSrc: "/assets/bg_card_1.png",
      imageAlt: "Introduction"
    },
    {
      title: "UI/UX Design Fundamentals",
      description: "Master the principles of user interface and user experience design.",
      imageSrc: "/assets/bg_card_2.png",
      imageAlt: "UI/UX Design"
    },
    {
      title: "Entrepreneurship 101: Launching Your Startup",
      description: "Develop a business plan and learn how to secure funding.",
      imageSrc: "/assets/bg_card_3.png",
      imageAlt: "Entrepreneurship"
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
        title="Unlock Your Potential with Expert-Led Courses"
        description="Explore a vast library of courses taught by industry leaders and passionate educators. Learn at your own pace , on your own schedule."
        primaryButtonText="Explore Courses"
        secondaryButtonText="Sign Up"
        onPrimaryClick={handlePrimaryClick}
        onSecondaryClick={handleSecondaryClick}
        backgroundImage="/assets/bg_main_card.png"
      />
      
      <InfoSection
        title="Featured Courses"
        items={infoItems}
      />
    </HomeLayout>
  );
}
