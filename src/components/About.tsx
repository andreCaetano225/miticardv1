'use client'


import Image from "next/image"
import midCard from '../assets/miticard.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from "react";


export const About = () => {

    useEffect(() => {
        Aos.init({ duration: 800 });
    }, []);

    return (
        <div className="">
            <div className=" md:max-w-[1220px] lg:max-w-[1220px] xl:max-w-[1220px] 2xl:max-w-[1220px] w-full m-auto mt-20" data-aos="fade-up">
                <div className="flex items-center justify-center flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row  gap-4  md:gap-20 xl:gap-20 lg:gap-20 2xl:gap-20 ">
                    <div className="bg-white p-4 md:p-10 lg:p-10 xl:p-10 2xl:p-10 rounded-lg">
                        <Image src={midCard} alt="About" className="rounded-lg w-[300px] md:w-[1500px] lg:w-[1500px] xl:w-[1500px] 2xl:w-[1500px]" />
                    </div>
                    <div className="flex flex-col gap-6 p-4 md:p-0 lg:p-0 xl:p-0 2xl:p-0">
                        <span className="text-textPrimary text-base">PARCERIA CONSOLIDADA</span>
                        <div className="flex flex-col gap-1">
                            <span className="text-textPrimary text-2xl md:text-6xl xl:text-6xl lg:text-6xl 2xl:text-6xl font-bold">Mìticard + Vida saúde</span>
                            <span className="text-textPrimary text-lg">Miticard e Vida Saúde Seguros caminham de mãos dadas em uma parceria já consolidada. Juntas, nossas instituições estão comprometidas em oferecer os melhores serviços e benefícios de saúde para você e sua família, garantindo qualidade, segurança e cuidado em cada atendimento.</span>
                        </div>

                    </div>
                </div>

                <div className="border-t border-black opacity-15 mt-20" />

            </div>
        </div>

    )
}