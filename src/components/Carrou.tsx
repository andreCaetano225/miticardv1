'use client'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { SampleNextArrow } from "./NextArrow";
import { SamplePrevArrow } from "./PrevArrow";
import { BoxCarrou } from "./BoxArrow";

import Aos from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from "react";

export const Carrour = () => {

    useEffect(() => {
        Aos.init({ duration: 800 });
    }, []);


    return (
        <div className="mt-20" data-aos="fade-down">
            <div className="flex flex-col items-center text-textPrimary gap-6">
                <span className="text-sm font-light">RELATOS DE CLIENTES</span>
                <span className="text-6xl font-bold">FeedBack</span>
            </div>
            <div className="slider-container max-w-[1320px] w-full m-auto px-4">
                <Slider
                    dots={true}
                    infinite={true}
                    speed={500}
                    slidesToShow={3}
                    slidesToScroll={1}
                    nextArrow={<SampleNextArrow />}
                    prevArrow={<SamplePrevArrow />}
                    responsive={[
                        {
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1,
                            },
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                            },
                        },
                    ]}
                >
                    <div className="px-2">
                        <BoxCarrou
                            name="Thiago Jacó"
                            photo="/thiago.png"
                            text="Mìti Card, um clube com bons descontos, seguro e com muitas vantagens. Super indico!"
                        />
                    </div>

                    <div className="px-2">
                        <BoxCarrou
                            name="Thayanne Abrantes"
                            photo="/thayanne.png"
                            text="Comodidade, inovação e segurança. Com o MìtiCard pude ter facilidade e um melhor acesso à saúde."
                        />
                    </div>

                    <div className="px-2">
                        <BoxCarrou
                            name="Maria Denise"
                            photo="/maria.png"
                            text="Com o Mìti Card foi possível realizar os procedimentos necessários para minha saúde. Recomendo!"
                        />
                    </div>

                    <div className="px-2">
                        <BoxCarrou
                            name="Erik Dias"
                            photo="/erik.png"
                            text="É um sistema incrível, um preço acessível, muitos benefícios, mas o melhor é o sistema de cashback"
                        />
                    </div>
                </Slider>
            </div>

            <div className="border-t border-black opacity-15 mt-20" />
        </div>
    );
};
