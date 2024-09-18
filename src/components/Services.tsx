'use client'

import { BoxText } from "./BoxText"
import Aos from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from "react";


export const Services = () => {

    useEffect(() => {
        Aos.init({ duration: 800 });
    }, []);


    return (
        <div className="  md:max-w-[1220px] lg:max-w-[1220px] xl:max-w-[1220px] 2xl:max-w-[1220px] w-full m-auto mt-20">

            <div className="flex flex-col items-center md:items-start lg:items-start xl:items-start 2xl:items-start text-textPrimary gap-6" data-aos="fade-down">
                <span className="text-sm font-light">SERVIÇOS NA</span>
                <span className="text-6xl font-bold">Saúde</span>
                <span className="text-lg font-normal">Com até 60% de descontos em:</span>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 mt-10" data-aos="fade-right">
                <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row gap-4">
                    <BoxText text="Consultas" />
                    <BoxText text="Cirurgias" />
                    <BoxText text="Exames de Imagem" />
                    <BoxText text="Exames Laboratorias" />
                </div>
                <div className="flex gap-4 flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row ">
                    <BoxText text="Farmácias" />
                    <BoxText text="Odontologia" />
                </div>
            </div>
            <div className="border-t border-black opacity-15 mt-20" />


        </div>
    )
}