import { ButtonUp } from "./components/ButtonUp";
import Loading from "./components/Loading";
import { Hero } from "./sections/Hero";
import { SectionEight } from "./sections/SectionEight";
import { SectionFour } from "./sections/SectionFour";
import { SectionNova } from "./sections/SectionNova";
import { SectionSeven } from "./sections/SectionSeven";
import { SectionSix } from "./sections/SectionSix";
import { SectionThree } from "./sections/SectionThree";
import { SectionTwo } from "./sections/SectionTwo";
import { Footer } from "./sections/footer";
import { useEffect, useState } from "react";

function App() {
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    // Simule um tempo de carregamento usando um setTimeout
    setTimeout(() => {
      setCarregado(true);
    }, 1000); // Altere o valor aqui para ajustar a duração do carregamento
  }, []);

  return (
    <>
      <div className="relative z-50">
        {!carregado ? (
          <Loading />
        ) : (
          <>
            <Hero />
            <SectionNova />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <SectionSix />
            <SectionSeven />
            <SectionEight />
            <ButtonUp />
            <Footer />
          </>
        )}
      </div>
    </>
  );
}

export default App;
