import { About } from "@/components/About";
import { BoxContent } from "@/components/BoxContent";
import { Carrour } from "@/components/Carrou";
import { Contact } from "@/components/Contact";
import { Fotter } from "@/components/Fotter";
import { Header } from "@/components/Header";
import { MitiVans } from "@/components/MitiVans";
import { Plans } from "@/components/Plan";
import { Services } from "@/components/Services";
import { StoreServices } from "@/components/StoreServices";

export default function Home() {
  return (
    <>
      <Header />
      <Services />
      <StoreServices />
      <About />
      <MitiVans />
      <BoxContent
        img="./cardmiti.jpg"
        subtitle="Como funciona os"
        title="Cashbacks?"
        text="Após realizar uma compra, exame, ou outros serviços com um de nossos parceiros, você terá um retorno de uma porcentagem da compra em forma de cashback."
        textbox1="O saldo é vitalício"
        textbox2="Você ganha saldo indicando amigos"
        textbox3="Você pode acumular o saldo com sua família"
      />
      <BoxContent
        subtitle="Sistema de"
        title="Indicação"
        img="./planetmiti.png"
        text="O Mìticard terá um sistema de indicação, no qual cada cliente terá sua rede de afiliados, e através dela você ganhará uma porcentagem dos ganhos de todos os clientes em sua rede."
        textbox1="Você ganha saldo de forma passiva"
        textbox2="Você pode indicar quantas pessoas quiser"
        textbox3="Sua rede também poderá indicar"

      />
      <Plans />
      <Carrour />
      <Contact />
      <Fotter />
    </>
  );
}
