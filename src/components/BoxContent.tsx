'use client'

import Aos from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from "react";
interface BoxContentProps {
    subtitle: string;
    title: string;
    text: string;
    img: string;
    textbox1: string;
    textbox2: string;
    textbox3: string;
}


export const BoxContent = ({ subtitle, img, text, textbox1, textbox2, textbox3, title }: BoxContentProps) => {


    useEffect(() => {
        Aos.init({ duration: 800 });
    }, []);



    return (
        <>
            <div className="  md:max-w-[1220px] lg:max-w-[1220px] xl:max-w-[1220px] 2xl:max-w-[1220px] w-full m-auto mt-20">

                <div className="flex flex-col items-center md:items-start lg:items-start xl:items-start 2xl:items-start text-textPrimary gap-6" data-aos="fade-down">
                    <span className="text-sm font-light">{subtitle}</span>
                    <span className="text-6xl font-bold">{title}</span>
                </div>

                <div data-aos="fade-right" className="w-full h-[690px] md:h-[420px] lg:h-[420px] xl:h-[420px] 2xl:h-[420px] shadow-2xl bg-[#f4f2f2] flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row items-center justify-between rounded-md font-bold p-20 mt-10 md:mt-16 lg:mt-16 xl:mt-16 2xl:mt-16">
                    <div className="flex flex-col gap-6">
                        <span className="text-titleBoxTow w-[360px] md:w-[560px] lg:w-[560px] xl:w-[560px] 2xl:w-[560px] text-[1.3rem]">
                            {text}
                        </span>

                        <div className="flex flex-col gap-2">
                            <div className="flex gap-4">
                                <img src="/check.svg" alt="asdas" />
                                <span className="text-textPrimary font-light">{textbox1}</span>
                            </div>

                            <div className="flex gap-4">
                                <img src="/check.svg" alt="asdas" />
                                <span className="text-textPrimary font-light">{textbox2}</span>
                            </div>

                            <div className="flex gap-4">
                                <img src="/check.svg" alt="asdas" />
                                <span className="text-textPrimary font-light">{textbox3}</span>
                            </div>
                        </div>


                    </div>



                    <img src={img} alt="asdas" className="mt-5 md:mt-0 lg:mt-0 xl:mt-0 2xl:mt-0" />



                </div>


                <div className="border-t border-black opacity-15 mt-20" />


            </div>
        </>
    )
}