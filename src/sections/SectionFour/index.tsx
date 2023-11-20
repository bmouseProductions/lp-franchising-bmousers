import { Botao } from "../../components/Button";
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
import Franchising from "../../assets/image/equipe.webp";

const info = [
  {
    title: "Endomarketing exclusivo com franqueados: ",
    text: "Plataforma exclusiva para entrega de conteúdos aos franqueados de forma organizada e personalizada, webinars com os melhores profissionais do Brasil sobre as mudanças no marketing, conteúdos aos colaboradores dos franqueados;    ",
  },
  {
    title: "Criação de campanha anual e posicionamento de marca: ",
    text: "Criação de planejamento estratégico anual tanto no B2B quanto no B2C, criação e desenvolvimento de conteúdos, assessoramento para compra de mídias, negociações com celebridades e influenciadores, criação de KV especializado para campanha e KVs de minicampanhas comerciais.;",
  },
  {
    title: "Programação e Performance: ",
    text: "Criação de websites, blogs, inbound e outbound marketing, landing pages, performance e impulsionamento em multiplataformas, mailing marketing, relatórios de desenvolvimento de campanhas.;",
  },
];

export const SectionFour = () => {
  return (
    <section className="bg-[#181B1F]">
      <div className="container px-3 m-auto py-20 flex flex-col gap-10 items-center justify-center">
        <h1 className="text-4xl md:text-3xl lg:text-4xl 2xl:text-[3.5rem] 2xl:leading-[4rem] text-left lg:text-center text-black leading-[3.125rem]">
          {" "}
          <strong className="text-[#0000f8]">
            Tecnologia em comunicação entre franqueadora e franqueado
          </strong>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 gap-5 items-center ">
          <img
            className="m-auto mb-14 lg:mb-0 vibrate-1"
            data-aos="fade-up"
            data-aos-duration="3000"
            data-aos-anchor-placement="bottom-bottom"
            src={Franchising}
            alt="Franchising"
          />
          <Timeline className="lg:w-[100%] ">
            {info.map((item, index) => {
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
                      className="text-lg leading-7  text-[#ffffffc2] mt-5  lg:mt-4  "
                    >
                      {item.text}
                    </Typography>
                  </TimelineBody>
                </TimelineItem>
              );
            })}
          </Timeline>
        </div>

        <div className="w-[80%] lg:w-[50%] 2xl:w-[30%] m-auto">
          <Botao />
        </div>
      </div>
      <hr />
    </section>
  );
};
