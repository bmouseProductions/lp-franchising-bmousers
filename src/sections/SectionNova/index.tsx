import { Botao } from "../../components/Button";
import HeroImg from "../../assets/image/abf.webp";

export const SectionNova = () => {
  return (
    <section className="bg-[#181B1F]">
      <div className=" flex flex-col lg:flex-row-reverse gap-5 container px-3 m-auto lg:gap-10 py-20  items-center justify-between">
        <div className="flex flex-col flex-1 items-center justify-center gap-8  ">
          <h1 className="text-4xl md:text-3xl lg:text-4xl 2xl:text-[3.5rem] 2xl:leading-[4rem] text-left lg:text-right text-white leading-[3.125rem]">
            {" "}
            Você se espelha em{" "}
            <strong className="text-[#0000f8]">
              {" "}
              franquias premiadas na ABF?
            </strong>{" "}
          </h1>
          <p className="text-white text-base 2xl:text-xl text-left lg:text-right ">
            Deseja efetivamente escalonar o seu modelo de franquia? Venha
            conhecer uma agência especialista no franchising que trabalhou com
            diversas grandes marcas do Brasil e conseguiu fazer história com
            elas.
          </p>

          <div className="w-[80%] 2xl:w-[50%]  lg:self-end">
            <Botao />
          </div>
        </div>
        <div className="flex-1 ">
          <img src={HeroImg} alt="" className=" w-full rounded-md " />
        </div>
      </div>
      <hr />
    </section>
  );
};
