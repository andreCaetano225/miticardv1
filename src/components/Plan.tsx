'use client'

import { BoxPlans } from "./BoxPlans"
import Image from "next/image";
import Banner01 from '../assets/empre.png';
import Aos from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from "react";



export const Plans = () => {

    useEffect(() => {
        Aos.init({ duration: 800 });
    }, []);


    return (
        <>
            <div className="  md:max-w-[1220px] lg:max-w-[1220px] xl:max-w-[1220px] 2xl:max-w-[1220px] w-full m-auto mt-20" id="planos">

                <div data-aos="fade-down" className="flex flex-col items-center md:items-start lg:items-start xl:items-start 2xl:items-start text-textPrimary gap-6">
                    <span className="text-sm font-light">NOSSOS</span>
                    <span className="text-6xl font-bold">Planos</span>
                </div>

                <div data-aos="fade-right" className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row items-center gap-0 md:gap-10 lg:gap-10 xl:gap-10 2xl:gap-10">
                    <BoxPlans title="Mìti BASIC" subtitle="PLANO INDIVIDUAL" price="R$ 28,90" pricex="Por apenas 12x de" />
                    <BoxPlans title="Mìti PREMIUM" subtitle="+01 DEPENDENTE" price="R$ 38,90" pricex="Por apenas 12x de" />
                    <BoxPlans title="Mìti FAMÍLIA" subtitle="+04 DEPENDENTES" price="R$ 58,90" pricex="Por apenas 12x de" />
                </div>
            </div>

            <div className="pt-[140px] w-full">
                <Image src={Banner01} alt="Banner" className="w-full h-auto max-h-[800px]" />
            </div>

        </>
    )
}