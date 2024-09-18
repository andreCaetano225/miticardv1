'use client'

import { FaInstagram, FaWhatsapp } from "react-icons/fa"
import { IoMdArrowForward } from "react-icons/io"
import Aos from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from "react";



export const Contact = () => {

    useEffect(() => {
        Aos.init({ duration: 800 });
    }, []);


    return (
        <div data-aos="fade-down">
            <div className=" mt-20">

                <div className="flex flex-col items-center text-textPrimary gap-6">
                    <span className="text-sm font-light">ENTRE EM </span>
                    <span className="text-6xl font-bold">Contato</span>
                </div>
            </div>
            <div className="  md:max-w-[1220px] lg:max-w-[1220px] xl:max-w-[1220px] 2xl:max-w-[1220px] w-full m-auto mt-20">

                <div className="flex  flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row md:justify-between lg:justify-between xl:justify-between 2xl:justify-between gap-10 md:gap-0 lg:gap-0 xl:gap-0 2xl:gap-0 items-center md:items-start lg:items-start xl:items-start 2xl:items-start">
                    <div className="bg-[#f4f2f2] w-[360px] md:w-[500px] lg:w-[500px] xl:w-[500px] 2xl:w-[500px]  md:h-[860px] lg:h-[860px] xl:h-[860px] 2xl:h-[860px] p-6 shadow-2xl flex flex-col gap-8 rounded-lg">
                        <img src="/cardplan.png" alt="aaa" className="w-[450px]" />


                        <span className="text-titleBoxTow text-3xl font-semibold">Mìticard</span>

                        <div className="flex flex-col text-textPrimary">
                            <span> {`> Cariri`}</span>
                            <span> {`> Fortaleza`}</span>
                        </div>


                        <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-2">
                                <span className="text-titleBoxTow font-semibold">Telefone Cariri:</span>
                                <span className="text-titleBoxTow font-light"> +55 (88) 99868-8020</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="text-titleBoxTow font-semibold">Telefone Fortaleza:</span>
                                <span className="text-titleBoxTow font-light"> +55 (85) 9671-6583</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="text-titleBoxTow font-semibold">Email Cariri:</span>
                                <span className="text-titleBoxTow font-light"> miticardsuporte@gmail.com</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="text-titleBoxTow font-semibold">Email Fortaleza:</span>
                                <span className="text-titleBoxTow font-light">  mitcardfortaleza@gmail.com</span>
                            </div>

                            <div className="mt-4">
                                <span className="text-[#0f3f57]">Redes Socias Cariri</span>

                                <div className="flex gap-4">
                                    <a href="https://www.instagram.com/miticardoficial/" target="_blank" rel="noopener noreferrer">
                                        <div className="bg-[#f2f3f4] cursor-pointer mt-5 shadow-2xl flex items-center justify-center rounded-lg w-[60px] h-[60px] text-textPrimary hover:bg-textPrimary hover:text-white transform hover:-translate-y-2 transition-all duration-300">
                                            <FaInstagram size={30} />
                                        </div>
                                    </a>
                                    <a href="https://api.whatsapp.com/send/?phone=5588999929846&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                                        <div className="bg-[#f4f2f2] cursor-pointer mt-5 shadow-2xl flex items-center justify-center rounded-lg w-[60px] h-[60px] text-textPrimary hover:bg-textPrimary hover:text-white transform hover:-translate-y-2 transition-all duration-300">
                                            <FaWhatsapp size={30} />
                                        </div>
                                    </a>

                                </div>

                            </div>

                            <div className="mt-4">
                                <span className="text-[#0f3f57]">Redes Socias Fortaleza</span>
                                <div className="flex gap-4">
                                    <a href="https://www.instagram.com/miticard_fortaleza/" target="_blank" rel="noopener noreferrer">
                                        <div className="bg-[#f2f3f4] cursor-pointer mt-5 shadow-2xl flex items-center justify-center rounded-lg w-[60px] h-[60px] text-textPrimary hover:bg-textPrimary hover:text-white transform hover:-translate-y-2 transition-all duration-300">
                                            <FaInstagram size={30} />
                                        </div>
                                    </a>

                                    <a href="https://api.whatsapp.com/send/?phone=5585996716583&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                                        <div className="bg-[#f4f2f2] cursor-pointer mt-5 shadow-2xl flex items-center justify-center rounded-lg w-[60px] h-[60px] text-textPrimary hover:bg-textPrimary hover:text-white transform hover:-translate-y-2 transition-all duration-300">
                                            <FaWhatsapp size={30} />
                                        </div>
                                    </a>


                                </div>

                            </div>
                        </div>





                    </div>

                    <div className="bg-[#f4f2f2] rounded-lg shadow-2xl w-[360px] md:h-[860px] lg:h-[860px] xl:h-[860px] 2xl:h-[860px] md:w-[600px] lg:w-[600px] xl:w-[600px] 2xl:w-[600px] p-12 flex flex-col gap-8">

                        <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row gap-8 md:gap-0 md:justify-between md:items-center">
                            <div className="flex flex-col gap-2">
                                <label className="text-textPrimary text-sm">NOME</label>
                                <input
                                    type="text"
                                    className="bg-white text-transparent border border-gray-300 rounded-md w-full md:w-[230px] lg:w-[230px] xl:w-[230px] 2xl:w-[230px] focus:border-bgButton focus:outline-none focus:ring-2 focus:ring-bgButton p-2"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-textPrimary text-sm">NÚMERO</label>
                                <input
                                    type="text"
                                    className="bg-white text-transparent border border-gray-300 rounded-md w-full md:w-[230px] lg:w-[230px] xl:w-[230px] 2xl:w-[230px] focus:border-bgButton focus:outline-none focus:ring-2 focus:ring-bgButton p-2"
                                />
                            </div>




                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-textPrimary text-sm">EMAIL</label>
                            <input
                                type="text"
                                className="bg-white text-transparent border border-gray-300 rounded-md  focus:border-bgButton focus:outline-none focus:ring-2 focus:ring-bgButton p-2"
                            />
                        </div>


                        <div className="flex flex-col gap-2">
                            <label className="text-textPrimary text-sm">ASSUNTO</label>
                            <input
                                type="text"
                                className="bg-white text-transparent border border-gray-300 rounded-md  focus:border-bgButton focus:outline-none focus:ring-2 focus:ring-bgButton p-2"
                            />
                        </div>


                        <div className="flex flex-col gap-2">
                            <label className="text-textPrimary text-sm">MENSAGEM</label>
                            <textarea
                                className="bg-white text-transparent border border-gray-300 rounded-md  focus:border-bgButton focus:outline-none focus:ring-2 focus:ring-bgButton p-12"
                            />
                        </div>

                        <button className="bg-bgButton w-full p-4 flex items-center justify-center text-white gap-2 rounded-md  transition transform hover:-translate-y-1 hover:shadow-lg ">
                            ENVIAR
                            <IoMdArrowForward />
                        </button>


                    </div>
                </div>



                <div className="border-t border-black opacity-15 mt-20" />


            </div>
        </div>
    )
}