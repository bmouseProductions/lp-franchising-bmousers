import { Botao } from "../../components/Button";
import Audiovisual from "../../assets/image/icons/adiovisual-e332747f.svg";
import Marketing from "../../assets/image/icons/mktoff-d75729ca.svg";
/* import Publico from "../../assets/image/icons/performance-43a49860.svg"; */
import Criacao from "../../assets/image/icons/produtosdigitais-691a283a.svg";
/* import Assessoria from "../../assets/image/icons/assessoria-67a09c85.svg"; */
import MakertingDigital from "../../assets/image/icons/mktdigital-13767259.svg";
/* import Programacao from "../../assets/image/icons/dev-25bd6d6a.svg"; */
import Elaboracao from "../../assets/image/icons/estrategica-a0abaa8f.svg";
import Programacao from "../../assets/image/icons/dev-25bd6d6a.svg";
/* import Garantia from "../../assets/image/Garantia/garantia.png"; */

const info = [
  {
    text: "VVídeos cinematográficos que contam a história da sua empresa de forma criativa e envolvente;",
    img: Audiovisual,
  },
  {
    text: "Presença digital constante, com designs incríveis que atraem e mantém sua audiência;",
    img: Criacao,
  },
  {
    text: "Identidade visual de destaque para sua marca no mercado;",
    img: MakertingDigital,
  },
  {
    text: "Endomarketing motivacional que aproxima os colaboradores, gerando menos rotatividade no time;",
    img: Elaboracao,
  },
  {
    text: "Criação de site, LPs, produtos e serviços, para maior visibilidade no mundo digital;",
    img: Programacao,
  },
  {
    text: "Assessoria em eventos, com criação de todo material digital e físicos (como stand, papelaria, banners, dentre outros);",
    img: Marketing,
  },
];

export const SectionSeven = () => {
  return (
    <section className="bg-[#181B1F]">
      <div className="container px-3 m-auto  py-20 flex flex-col gap-5 2xl:gap-10 items-center justify-center">
        <h1 className="text-4xl md:text-3xl lg:text-4xl 2xl:text-[3.5rem] text-left lg:text-center 2xl:leading-[4rem]  text-white leading-[3.125rem]">
          {" "}
          <strong className="text-[#0000f8]"> Garantias</strong> que a
          <strong className="text-[#0000f8]"> BMouse traz </strong>
          para os clientes.
        </h1>
        {/*  <p className="text-base 2xl:text-xl  text-left lg:text-center text-white 2xl:w-[70%]">
          Na BMouse, nossa garantia é o seu sucesso. Trabalhamos incansavelmente
          para oferecer soluções de marketing que transformam sua presença
          online e impulsionam sua marca.
        </p> */}

        <ul className="grid grid-col-1 lg:grid-cols-2 gap-4">
          {info.map((item, index) => {
            return (
              <li
                key={index}
                className="px-5 bg-gradient-black rounded-2xl min-h-[130px] w-full  flex gap-3 justify-center items-center text-black text-sm"
              >
                <img src={item.img} alt="" className="w-[40px]" />
                <p className="text-base text-black">{item.text}</p>
              </li>
            );
          })}
        </ul>
        {/* 
          <img src={Garantia} alt="" className="garantia w-[70%] 2xl:w-full " /> */}

        
        <div className="w-[80%] lg:w-[50%] 2xl:w-[30%] m-auto">
          <Botao />
        </div>
      </div>
      <hr />
    </section>
  );
};
