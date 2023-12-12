import { Button } from "@material-tailwind/react";

interface BotaoProps {
  estilo?: "principal" | "secundario";
}

export const Botao: React.FC<BotaoProps> = ({ estilo = "principal" }) => {
  function redirecionar() {
    window.open(
      "https://bmouseproductions.com/view/atendimento/",
      "_blank"
    );
  }
  return (
    <Button
      onClick={redirecionar}
      size="lg"
      className={`${
        estilo === "principal"
          ? "bg-[#0000f8] text-[#ffffff]"
          : "bg-[#32592E] text-white "
      } w-full font-bold rounded-md mt-2 animate-bounce`}
    >
      Entre em contato conosco
    </Button>
  );
};
