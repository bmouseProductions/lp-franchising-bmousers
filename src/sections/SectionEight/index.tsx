
import bmouse2 from "../../assets/image/audioVisual.webp";
import claquete from "../../assets/image/animation/claquete.json";
import film from "../../assets/image/animation/film.json";
import gif from '../../assets/image/animation/GIF-Mouse-1.gif'

import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
  /*   Button, */
} from "@material-tailwind/react";

import { Player } from "@lottiefiles/react-lottie-player";

const info = [
  {
    title: "Filmagens em até 12K cinema;",
    text: " ",
  },
  {
    title: "Vídeos institucionais;",
    text: " ",
  },
  {
    title: "Documentários e longas;",
    text: " ",
  },
  {
    title: "Pílulas comerciais;",
    text: " ",
  },
  {
    title: "Filmagens aéreas;",
    text: " ",
  },
  {
    title: "Tutoriais animados.",
    text: " ",
  },
];

const info2 = [
  {
    title: "Filmagens em realidade virtual em 8K",
    text: " ",
  },
  {
    title: "Equipamentos de robótica para movimentação de equipamentos;",
    text: " ",
  },
  {
    title: "Filmagem aérea em 3D para realidade virtual;",
    text: " ",
  },
  {
    title: "Animações exclusivas para os conteúdos.",
    text: " ",
  },
];

export const SectionEight = () => {
  return (
    <section className="bg-[#181B1F]">
      <div className="container px-3  m-auto flex flex-col lg:flex-row py-10 md:py-20  gap-10 items-center justify-between">
        <div className="flex flex-col gap-0">
          <h1 className="text-2xl text-left leading-[2.125rem] mb-7 md:text-5xl lg:text-4xl md:text-left 2xl:text-[2.5rem] 2xl:leading-[3.5rem] text-white w-full ">
            {" "}
            <strong className="text-[#0000f8]">
              {" "}
              Universo BMouse Productions{" "}
            </strong>
            de produção de conteúdos
          </h1>

          <div className="flex flex-col lg:flex-row  lg:justify-center lg:items-center">
            <Timeline className="lg:w-1/2 mt-5 ">
              {info.map((item, index) => {
                return (
                  <TimelineItem
                    key={index}
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="3000"
                  >
                    <TimelineConnector className="!right-0" />
                    <TimelineHeader className="h-3 !right-0 -left-0">
                      <TimelineIcon className=" bg-[#0000f8] " />
                      <Typography
                        variant="h5"
                        className="leading-none  text-[#fff]"
                      >
                        {item.title}
                      </Typography>
                    </TimelineHeader>
                    <TimelineBody className="pb-8 ">
                      <Typography
                        variant="paragraph"
                        className="text-lg leading-7  text-[#adadadc2] mt-5  lg:mt-4  "
                      >
                        {item.text}
                      </Typography>
                    </TimelineBody>
                  </TimelineItem>
                );
              })}
            </Timeline>

            <div className="w-1/2 flex relative top-0">
              <div className="absolute top-[180px] -left-[-140px] sm:-left-[-280px] md:w-[300px] md:-left-[-380px] lg:-top-[30px] lg:left-[180px] 2xl:-top-[50px] 2xl:left-[280px] ">
                <Player
                  autoplay
                  loop
                  src={claquete}
                  className="w-[200px] sm:w-[250px] md:w-[300px] lg:md:w-[260px] 2xl:w-[350px] animate-bounce"
                />
              </div>

              <div className="absolute top-[-50px]  md:-top-[30px] md:-left-[10px] lg:-top-[250px] lg:-left-[100px] 2xl:-top-[230px] 2xl:-left-[180px] ">
                <Player
                  autoplay
                  loop
                  src={film}
                  className="w-[220px] sm:w-[300px] md:w-[350px] lg:md:w-[300px] 2xl:w-[400px] animate-pulse"
                />
              </div>
            </div>
          </div>

          <div className="mt-[400px] md:pt-[100px] lg:pt-0 lg:mt-0  flex flex-col lg:flex-row-reverse justify-between items-center mb-10">
            <div className="flex flex-col lg:w-1/2">
              <p className=" text-white text-lg mb-10 leading-8">
                E para finalizar, trazemos para você o melhor do{" "}
                <strong className="text-[#0000f8]">META VERSO,</strong> com:
              </p>

              <Timeline className="lg:w-2/3 ">
                {info2.map((item, index) => {
                  return (
                    <TimelineItem
                      key={index}
                      data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom"
                      data-aos-duration="3000"
                    >
                      <TimelineConnector />
                      <TimelineHeader className="h-3">
                        <TimelineIcon className=" bg-[#0000f8] " />
                        <Typography
                          variant="h5"
                          className="leading-none  text-[#fff]"
                        >
                          {item.title}
                        </Typography>
                      </TimelineHeader>
                      <TimelineBody className="pb-8 ">
                        <Typography
                          variant="paragraph"
                          className="text-lg leading-7  text-[#adadadc2] mt-5  lg:mt-4  "
                        >
                          {item.text}
                        </Typography>
                      </TimelineBody>
                    </TimelineItem>
                  );
                })}
              </Timeline>
            </div>

            <img src={bmouse2} alt="" className="mt-7 w-full lg:max-w-[40%] vibrate-1 " />
          </div>

          <div className="w-full flex flex-col lg:flex-row justify-center items-center">

            <div>
              

              <p className="max-w-[800px] mb-5 mx-auto text-white text-lg text-start lg:text-center leading-8">
                Na BMouse, nossa missão é elevar a sua marca, e garantimos que cada
                projeto que tocamos seja conduzido com excelência e dedicação
                inabalável. Sua satisfação é a nossa prioridade.
              </p>

              <p className="max-w-[800px] mb-5 mx-auto text-white text-lg text-start lg:text-center leading-8">
                Está preparado para entregar ao seu franqueado a melhor tecnologia
                do mundo aliada a grandes estratégias comerciais?
              </p>

              <div className="hidden lg:flex w-full  justify-center ">
                <a 
                  href="https://wa.me/5534999306776?text=Ol%C3%A1%2C+vim+atrav%C3%A9s+do+site%2C+gostaria+de+receber+mais+informa%C3%A7%C3%B5es+sobre+os+servi%C3%A7os+de+voc%C3%AAs." 
                  target="_blank" 
                  className="mt-5 w-[80%] md:w-[70%]  py-5 text-center text-xl text-white font-semibold rounded-md bg-[#0000f8] animate-bounce"
                >
                  Entre em contato conosco
                </a>
              </div>
            </div>
            
            <div className="mt-5 p-5 lg:p-0 lg:mt-0">
              <img src={gif} alt="" className="rounded vibrate-1" />
            </div>
            

            <div className="mt-10 w-full flex justify-center lg:hidden">
                <a 
                  href="https://wa.me/5534999306776?text=Ol%C3%A1%2C+vim+atrav%C3%A9s+do+site%2C+gostaria+de+receber+mais+informa%C3%A7%C3%B5es+sobre+os+servi%C3%A7os+de+voc%C3%AAs." 
                  target="_blank" 
                  className="mt-5 w-[90%] md:w-[70%]  py-5 text-center text-xl text-white font-semibold rounded-md bg-[#0000f8] animate-bounce"
                >
                  Entre em contato conosco
                </a>
              </div>
          </div>
          
        </div>
      </div>
      <hr />
    </section>
  );
};
