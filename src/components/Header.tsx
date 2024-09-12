'use client'

import Image from "next/image";
import { useEffect, useState } from "react";
import Logo from '../assets/logomiti.png';
import Banner01 from '../assets/bannerhome.png';

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

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

    return (
        <>
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'} `}>
                <div className="max-w-[1420px] w-full m-auto flex items-center justify-between py-4 px-6">
                    <Image src={Logo} width={200} height={200} alt="Logo" />

                    <div className="flex items-center gap-6">

                        <div className="flex items-center gap-4 group">
                            <span className="nav-item text-titleBoxTow transition-colors duration-300 group-hover:text-hoverHeader group-hover:hover:text-titleBoxTow cursor-pointer font-semibold text-[13px]">COMO FUNCIONA</span>
                            <span className="nav-item text-titleBoxTow transition-colors duration-300 group-hover:text-hoverHeader group-hover:hover:text-titleBoxTow cursor-pointer font-semibold text-[13px]">PLANOS</span>
                            <span className="nav-item text-titleBoxTow transition-colors duration-300 group-hover:text-hoverHeader group-hover:hover:text-titleBoxTow cursor-pointer font-semibold text-[13px]">FEEDBACK</span>
                            <span className="nav-item text-titleBoxTow transition-colors duration-300 group-hover:text-hoverHeader group-hover:hover:text-titleBoxTow cursor-pointer font-semibold text-[13px]">SUPORTE</span>
                            <span className="nav-item text-titleBoxTow transition-colors duration-300 group-hover:text-hoverHeader group-hover:hover:text-titleBoxTow cursor-pointer font-semibold text-[13px]">PARCEIROS</span>
                        </div>

                        <button className="p-3 px-6 rounded-md text-white flex items-center bg-bgButton transition transform hover:-translate-y-1 hover:shadow-lg">
                            ENTRAR
                        </button>
                    </div>
                </div>
            </header>

            <div className="pt-[80px]">
                <Image src={Banner01} alt="Banner" className='w-full' />
            </div>
        </>
    );
};
