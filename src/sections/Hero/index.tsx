import Logo from "../../assets/image/Logos/franchisingbmouse.svg";
import { Botao } from "../../components/Button";
import HeroImg from "../../assets/image/Hero/BannerNovoIAFranchising3.webp";

export const Hero = () => {
  return (
    <section className="pt-10  bg-[#181B1F]">
      <img
        src={Logo}
        alt="Franshing Bmouse"
        className="mx-auto w-[10rem] md:w-[18rem] "
      />
      <div className=" flex flex-col-reverse lg:flex-row gap-5  container px-3 m-auto lg:gap-10  items-center justify-between">
        <div className="flex flex-col flex-1 items-center justify-center gap-5  ">
          
          <h1 className="text-4xl text-[34px] md:text-3xl lg:text-4xl 2xl:text-[3.5rem] 2xl:leading-[4rem] text-center text-white leading-[3.125rem]">
            {" "}
            O sucesso da sua{" "}
            <strong className="text-[#0000f8]">
              {" "}
              franquia está aqui!
            </strong>{" "}
          </h1>
          <p className="text-white text-base 2xl:text-xl text-center ">
            Cansado de investir pesado no seu fundo de propagandas e continuar
            com resultados muito baixos dentro do seu plano? Vamos te mostrar
            como o mundo mudou.
          </p>

          <div className="w-[80%] 2xl:w-[50%] ">
            <Botao />
          </div>
        </div>
        <div className="flex-1  self-center">
          <img src={HeroImg} alt="" className="mt-5 h-auto  w-full vibrate-1" />
        </div>
      </div>
      <hr className="mt-5"/>
    </section>
  );
};
