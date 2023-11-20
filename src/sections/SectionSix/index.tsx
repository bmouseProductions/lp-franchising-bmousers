import { Botao } from "../../components/Button";
import TomBeta from "../../assets/image/Sobre/TomBeta-6156df0e.webp";

export const SectionSix = () => {
  return (
    <section className="bg-[#181B1F]">
      <div className="container px-3 m-auto  py-20 flex flex-col-reverse lg:flex-row-reverse  gap-10 items-center justify-between">
        <div className="flex-1 flex items-center justify-start ">
          <img src={TomBeta} alt="" className="vibrate-1" />
        </div>
        <div className="flex flex-col justify-end gap-5 flex-1">
          <h1 className="text-4xl md:text-3xl lg:text-4xl 2xl:text-[3.5rem] text-left 2xl:leading-[4rem]  text-white leading-[3.125rem]">
            {" "}
            <strong className="text-[#0000f8] text-left">Quem Somos?</strong>
          </h1>
          <p className="text-white text-lg text-left  leading-8">
          A BMouse é muito mais do que uma agência de marketing. Somos uma agência de criatividade com uma equipe de profissionais altamente capacitados e dedicados.
          </p>
          <p className="text-white text-lg text-left  leading-8">
          O nosso diferencial? Possuímos um Studio próprio equipado com tecnologia de cinema, câmera VR, chroma e muito mais para atender aos mais altos padrões de qualidade.
          </p>
          {/*   <p className="text-white text-lg text-left  leading-8">
            Estamos prontos para desafiar o convencional, ultrapassar limites e
            levar a sua empresa a todos os cantos do mundo. Empenhados em
            destacar o potencial da sua marca, oferecemos soluções criativas que
            a tornam inesquecível.
          </p> 
          <p className="text-white text-lg text-left  leading-8">
            Conte com a BMouse para fazer a diferença no mercado e expandir a
            sua franquia.
          </p>*/}{" "}
          <div className="w-[80%] self-center md:w-[50%] lg:self-start">
            <Botao />
          </div>
        </div>
      </div>
      <hr />
    </section>
  );
};
