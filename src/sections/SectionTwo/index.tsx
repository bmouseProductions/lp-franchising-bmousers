import { Botao } from "../../components/Button";

export const SectionTwo = () => {
  return (
    <section className="bg-[#181B1F]">
      <div className="container rounded-xl m-auto flex flex-col px-3 py-20 gap-10 items-center justify-center ">
        <h1 className="text-4xl md:text-3xl lg:text-4xl 2xl:text-[3.5rem] 2xl:leading-[4rem] text-center text-white leading-[3.125rem]">
          {" "}
          Onde os clientes de{" "}
          <strong className="text-[#0000f8]">
            franchising podem chegar com a Bmouse?
          </strong>
        </h1>

        <div className=" bg-[#0000f8] p-2 2xl:p-5 rounded-2xl  2xl:w-[760px] 2xl:h-[455px]">
          <iframe
            src="https://www.youtube.com/embed/tOUAucHN7QQ?si=Wp2p6c7CksAd0x_r"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            className="rounded-md w-full h-full md:w-[500px] md:h-[280px] lg:w-[700px] lg:h-[350px] xl:w-xl xl-h-xl 2xl:w-full 2xl:h-full"
          ></iframe>
        </div>

        <div className="w-[80%] lg:w-[50%] 2xl:w-[30%] m-auto">
          <Botao />
        </div>
      </div>
      <hr />
    </section>
  );
};
