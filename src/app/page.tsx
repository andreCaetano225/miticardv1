import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { StoreServices } from "@/components/StoreServices";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Services />
      <StoreServices />
      <About />
    </>
  );
}
