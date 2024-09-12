import { About } from "@/components/About";
import { Header } from "@/components/Header";
import { MitiVans } from "@/components/MitiVans";
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
    </>
  );
}
