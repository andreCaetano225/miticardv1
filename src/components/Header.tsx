'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';  // Importando ícones de hambúrguer e fechar
import Logo from '../assets/logomiti.png';
import Link from "next/link";

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);  // Controle do estado do menu

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);  // Alterna entre abrir/fechar o menu
    };

    return (
        <>
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'} `}>
                <div className="max-w-[1420px] w-full m-auto flex items-center justify-between py-4 px-6">
                    <Link href="/">
                        <div className="hidden md:block">
                            <Image src={Logo} width={200} height={200} alt="Logo" />
                        </div>
                    </Link>

                    <Link href="/">

                        <div className="block md:hidden">
                            <Image src={Logo} width={100} height={100} alt="Logo" />
                        </div>
                    </Link>



                    <div className="hidden md:flex items-center gap-6">
                        <div className="flex items-center gap-4 group">
                            <span className="nav-item text-titleBoxTow transition-colors duration-300 group-hover:text-hoverHeader group-hover:hover:text-titleBoxTow cursor-pointer font-semibold text-[13px]">COMO FUNCIONA</span>
                            <span className="nav-item text-titleBoxTow transition-colors duration-300 group-hover:text-hoverHeader group-hover:hover:text-titleBoxTow cursor-pointer font-semibold text-[13px]">PLANOS</span>
                            <span className="nav-item text-titleBoxTow transition-colors duration-300 group-hover:text-hoverHeader group-hover:hover:text-titleBoxTow cursor-pointer font-semibold text-[13px]">FEEDBACK</span>
                            <span className="nav-item text-titleBoxTow transition-colors duration-300 group-hover:text-hoverHeader group-hover:hover:text-titleBoxTow cursor-pointer font-semibold text-[13px]">SUPORTE</span>
                            <Link href="/parceiros">
                                <span className="nav-item text-titleBoxTow transition-colors duration-300 group-hover:text-hoverHeader group-hover:hover:text-titleBoxTow cursor-pointer font-semibold text-[13px]">PARCEIROS</span>

                            </Link>
                        </div>

                        <button className="p-3 px-6 rounded-md text-white flex items-center bg-bgButton transition transform hover:-translate-y-1 hover:shadow-lg">
                            ENTRAR
                        </button>
                    </div>


                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-2xl">
                            {isMenuOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>


                <div className={`md:hidden bg-white w-full absolute top-full left-0 py-4 shadow-md transition-all duration-500 ease-in-out transform ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-96 opacity-0'}`}>
                    <div className="flex flex-col items-center gap-4">
                        <span className="nav-item text-titleBoxTow transition-colors duration-300 cursor-pointer font-semibold text-[13px]">COMO FUNCIONA</span>
                        <span className="nav-item text-titleBoxTow transition-colors duration-300 cursor-pointer font-semibold text-[13px]">PLANOS</span>
                        <span className="nav-item text-titleBoxTow transition-colors duration-300 cursor-pointer font-semibold text-[13px]">FEEDBACK</span>
                        <span className="nav-item text-titleBoxTow transition-colors duration-300 cursor-pointer font-semibold text-[13px]">SUPORTE</span>
                        <Link href="/parceiros">
                            <span className="nav-item text-titleBoxTow transition-colors duration-300 cursor-pointer font-semibold text-[13px]">PARCEIROS</span>

                        </Link>
                        <button className="p-3 px-6 rounded-md text-white bg-bgButton transition transform hover:-translate-y-1 hover:shadow-lg">
                            ENTRAR
                        </button>
                    </div>
                </div>
            </header>


        </>
    );
};
