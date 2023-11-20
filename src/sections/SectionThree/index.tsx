import { Player } from "@lottiefiles/react-lottie-player";
import Slider from "react-slick";

import swiper from '../../assets/image/animation/swiper.json'

import { Botao } from "../../components/Button";

import SalusBanner from "../../assets/image/banner/salusBanner.webp";
import SorridentsBanner from "../../assets/image/banner/sorridentsBanner.webp";
import GiolaserBanner from "../../assets/image/banner/giolaserBanner.webp";
import SorridenBanner from "../../assets/image/banner/sorridenBanner.webp";

import Salus from "../../assets/image/Logos/franchisingbmouse.svg";
import Sorridents from "../../assets/image/Logos/sorridents.svg";
import Giolaser from "../../assets/image/Logos/giolaser.svg";
import Sorriden from "../../assets/image/Logos/sorriden.svg";

import SalusMobile from "../../assets/image/carrosel/salusMobile.png";
import SorridentsMobile from "../../assets/image/carrosel/sorridentsMobile.png";
import GiolaserMobile from "../../assets/image/carrosel/giolaserMobile.png";
import SorridenMobile from "../../assets/image/carrosel/sorridenMobile.png";

/* import { Player } from "@lottiefiles/react-lottie-player";
import Animation from "../../assets/image/animation/Seta.json";
 */
export const SectionThree = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const settingsMobile = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const info = [
    {
      logo: Salus,
      banner: SalusBanner,
      text: `O Grupo Salus é um nome sólido no mundo do franchising, e por trás dessa trajetória de sucesso, há uma inspiradora história de superação. Foi nesse espírito que a BMouse criou o projeto 'A Força de um Sorriso'.`,
      link: "https://www.bmouseproductions.com/view/post_type_case/a-forca-de-um-sorriso-filme-sorridents/",
    },
    {
      logo: Sorridents,
      banner: SorridentsBanner,
      text: "Com a Sorridents, a BMouse criou uma série de projetos inovadores. O primeiro grande marco foi a campanha 'Alegria', uma ação original e inovadora no contexto do marketing odontológico.",
      link: "https://www.bmouseproductions.com/view/post_type_case/sorridents/",
    },
    {
      logo: Giolaser,
      banner: GiolaserBanner,
      text: "A GiOlaser é uma rede de franquias renomada criada pela atriz Giovanna Antonelli, que atualmente tem a participação do Grupo Salus.",
      link: "https://www.bmouseproductions.com/view/post_type_case/giolaser/",
    },
    {
      logo: Sorriden,
      banner: SorridenBanner,
      text: "Com a Sorriden, não apenas tivemos a oportunidade de mergulhar na história do casal visionário por trás desse império da indústria da beleza e bem-estar, mas também de contar sua trajetória de maneira excepcional.",
      link: "https://www.bmouseproductions.com/view/post_type_case/sorriden/",
    },
  ];

  const infoMobile = [
    {
      logo: SalusMobile,
      text: `O Grupo Salus é um nome sólido no mundo do franchising, e por trás dessa trajetória de sucesso, há uma inspiradora história de superação. Foi nesse espírito que a BMouse criou o projeto 'A Força de um Sorriso'.`,
      link: "https://www.bmouseproductions.com/view/post_type_case/a-forca-de-um-sorriso-filme-sorridents/",
    },
    {
      logo: SorridentsMobile,
      text: "Com a Sorridents, a BMouse criou uma série de projetos inovadores. O primeiro grande marco foi a campanha 'Alegria', uma ação original e inovadora no contexto do marketing odontológico.",
      link: "https://www.bmouseproductions.com/view/post_type_case/sorridents/",
    },
    {
      logo: GiolaserMobile,
      text: "A GiOlaser é uma rede de franquias renomada criada pela atriz Giovanna Antonelli, que atualmente tem a participação do Grupo Salus.",
      link: "https://www.bmouseproductions.com/view/post_type_case/giolaser/",
    },
    {
      logo: SorridenMobile,
      text: "Com a Sorriden, não apenas tivemos a oportunidade de mergulhar na história do casal visionário por trás desse império da indústria da beleza e bem-estar, mas também de contar sua trajetória de maneira excepcional.",
      link: "https://www.bmouseproductions.com/view/post_type_case/sorriden/",
    },
  ];

  return (
    <section className="bg-[#181B1F]">
      <div className=" m-auto py-20 flex flex-col gap-5 items-center justify-center">
        <h1 className="text-4xl md:text-3xl lg:text-4xl 2xl:text-[3.5rem] 2xl:leading-[4rem] text-center text-white leading-[3.125rem]">
          {" "}
          <strong className="text-[#0000f8]"> Veja o vasto universo </strong>
          produzido pela BMouse
        </h1>
        <Player
          autoplay
          loop
          src={swiper}
          className="mt-10 w-[80px] sm:w-[110px] md:w-[150px] lg:w-[200px] absolute z-50 right-0 "
        />
        <Slider
          {...settings}
          /*           className="hidden md:block md:w-[80%] 2xl:w-[50%]  h-full bg-deep-orange-600" */
          className="hidden lg:block w-full relative"
        >
          
          {info.map((item, index) => (
            <div key={index}>
              <div
                className="gap-10 px-20 g flex flex-col  items-start justify-center bg-cover  lg:min-h-[500px] xl:min-h-[600px] 2xl:min-h-[800px] "
                style={{ backgroundImage: `url(${item.banner})` }}
              >
                <img src={item.logo} className="w-[200px]" />
                <p className="text-left text-xl text-white w-[50%] ">
                  {item.text}
                </p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0000f8] p-3 rounded-md w-[20%] flex items-center justify-center text-white "
                >
                  Saiba mais
                </a>
              </div>
            </div>
          ))}
        </Slider>

        <Slider {...settingsMobile} className="block lg:hidden w-full h-full ">
          {infoMobile.map((item, index) => (
            <div key={index}>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cover   px-20 flex flex-col gap-10 items-start justify-center min-h-[360px] md:min-h-[800px]"
                style={{ backgroundImage: `url(${item.logo})` }}
              >
                {/*  <img src={item.logo} alt="" className="w-[200px]" />
                <p className="text-left text-lg leading-9 text-black">
                  {item.text}
                </p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0000f8] p-4 rounded-md w-full flex items-center justify-center  text-white"
                >
                  Saiba mais
                </a> */}
              </a>
            </div>
          ))}
        </Slider>

        <div className="w-[80%] lg:w-[50%] 2xl:w-[30%] m-auto mt-10">
          <Botao />
        </div>
      </div>
      <hr />
    </section>
  );
};
