'use client'

import { BoxText } from "./BoxText"
import Aos from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from "react";



export const StoreServices = () => {

    useEffect(() => {
        Aos.init({ duration: 800 });
    }, []);

    return (
        <>
            <div className="  md:max-w-[1220px] lg:max-w-[1220px] xl:max-w-[1220px] 2xl:max-w-[1220px] w-full m-auto mt-20">

                <div className="flex flex-col items-center text-textPrimary gap-6" data-aos="fade-up">
                    <span className="text-sm font-light">GANHE CASHBACKS COM</span>
                    <span className="text-3xl md:text-6xl lg:text-6xl 2xl:text-6xl xl:text-6xl font-bold">Compras e Serviços</span>
                </div>

                <div data-aos="fade-up" className="flex items-center flex-col md:grid lg:grid xl:grid 2xl:grid grid-cols-1 md:grid-cols-4  lg:grid-cols-4  xl:grid-cols-4  2xl:grid-cols-4  gap-4 mt-10">
                    <BoxText text="Salões de Beleza" />
                    <BoxText text="Serviços Automotivos" />
                    <BoxText text="Postos de Combustíveis" />
                    <BoxText text="Viagens" />
                    <BoxText text="Restaurantes" />
                    <BoxText text="Óticas" />
                    <BoxText text="Academias" />
                    <BoxText text="Barbearia" />
                </div>


            </div>
        </>
    )
}