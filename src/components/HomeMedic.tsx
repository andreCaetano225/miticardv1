'use client'
import Aos from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from "react";


export const HomeMedic = () => {


    useEffect(() => {
        Aos.init({ duration: 800 });
    }, []);


    return (
        <>
            <div className="  md:max-w-[1220px] lg:max-w-[1220px] xl:max-w-[1220px] 2xl:max-w-[1220px] w-full m-auto mt-20" data-aos="fade-down">
                <div className="flex flex-col items-center text-textPrimary gap-6">
                    <span className="text-3xl md:text-6xl lg:text-6xl xl:text-6xl 2xl:text-6xl font-bold">Nossos Médicos Parceiros</span>
                    <div className="border-t border-black opacity-15 mt-20" />
                </div>


                <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row  2xl:flex-row  items-center gap-6 justify-center">



                    <div className="shadow-2xl bg-white  w-[340px] md:w-[500px] lg:w-[500px] xl:w-[500px] 2xl:w-[500px] flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row gap-4 p-10 rounded-md">

                        <div className="flex flex-col gap-4">
                            <div>
                                <span className="text-titleBoxTow w-[360px] md:w-[560px] lg:w-[560px] xl:w-[560px] 2xl:w-[560px] text-[1.3rem]">
                                    Dr. Hedilberto Macêdo
                                </span>
                            </div>

                            <div className="flex flex-col gap-2">
                                <div className="flex gap-2">
                                    <img src="/check.svg" alt="check" />
                                    <span className="text-textPrimary font-light text-sm">
                                        Cirurgia geral e pequenas cirurgias
                                    </span>
                                </div>
                            </div>
                        </div>



                        <img
                            src="/dr01.png"
                            alt="Dr. Hedilberto Macêdo"
                            className="w-[220px] h-auto"
                        />
                    </div>


                    <div className="shadow-2xl bg-white w-[340px] md:w-[500px] lg:w-[500px] xl:w-[500px] 2xl:w-[500px]  flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row gap-4 p-10 rounded-md">

                        <div className="flex flex-col gap-4">
                            <div>
                                <span className="text-titleBoxTow w-[360px] md:w-[560px] lg:w-[560px] xl:w-[560px] 2xl:w-[560px] text-[1.3rem]">
                                    Dra. Emanuelle Macêdo
                                </span>
                            </div>

                            <div className="flex flex-col gap-2">
                                <div className="flex gap-2">
                                    <img src="/check.svg" alt="check" />
                                    <span className="text-textPrimary font-light text-sm">
                                        Enfermagem especializada
                                    </span>
                                </div>
                            </div>
                        </div>



                        <img
                            src="/dr02.png"
                            alt="Dr. Hedilberto Macêdo"
                            className="w-[220px] h-auto"
                        />
                    </div>

                </div>


            </div>


        </>
    )
}