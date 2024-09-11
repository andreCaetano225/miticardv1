import { About } from "@/components/About";
import { MitiVans } from "@/components/MitiVans";
import { Services } from "@/components/Services";
import { StoreServices } from "@/components/StoreServices";

export default function Home() {
  return (
    <>
      <Services />
      <StoreServices />
      <About />
      <MitiVans />
    </>
  );
}
