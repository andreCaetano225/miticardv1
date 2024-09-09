import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { StoreServices } from "@/components/StoreServices";

export default function Home() {
  return (
    <>
      <Services />
      <StoreServices />
      <About />
    </>
  );
}
