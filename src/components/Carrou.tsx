import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider, { CustomArrowProps } from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface BoxCarrouProps {
    text: string;
    photo: string;
    name: string;
}




const BoxCarrou = ({ name, photo, text }: BoxCarrouProps) => {
    return (
        <>
            <div >
                <div className="w-full max-w-[400px] h-[220px] shadow-xl flex flex-col gap-2  rounded-md font-bold mx-auto mt-16 p-6">
                    <div className="flex flex-row items-center mt-8 gap-2">
                        <img src={photo} alt="" className="rounded-full w-[60px]" />
                        <span className="text-xl text-bgButton font-bold ">{name}</span>
                    </div>
                    <span className="text-sm font-light text-textPrimary">{`"${text}"`}</span>

                </div>
            </div>
        </>
    )
}

const SamplePrevArrow = (props: CustomArrowProps) => {
    const { className, onClick } = props;
    return (
        <div onClick={onClick} className={`arrow ${className}`} >
            <IoIosArrowBack className="arrows" style={{ color: "white" }} />
        </div>
    )
}

function SampleNextArrow(props: CustomArrowProps) {
    const { className, onClick } = props;
    return (
        <div onClick={onClick} className={`arrow ${className}`} >
            <IoIosArrowForward className="arrows" style={{ color: "white" }} />
        </div>
    )
}


export const Carrour = () => {


    return (
        <div className=" mt-20">
            <div className="flex flex-col items-center text-textPrimary gap-6">
                <span className="text-sm font-light">RELATOS DE CLIENTES</span>
                <span className="text-6xl font-bold">FeedBack</span>
            </div>
            <div className="slider-container max-w-[1320px] h-[400px] w-full m-auto px-4">
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
                    <div style={{ padding: '0 10px' }}>
                        <BoxCarrou name="Thiago Jacó" photo="/thiago.png" text="Mìti Card, um clube com bons descontos, seguro e com muitas vantagens. Super indico!" />
                    </div>

                    <div style={{ padding: '0 10px' }}>
                        <BoxCarrou name="Thayanne Abrantes" photo="/thayanne.png" text="Comodidade, inovação e segurança. Com o MìtiCard pude ter facilidade e um
                  melhor acesso à saúde."
                        />
                    </div>

                    <div style={{ padding: '0 10px' }}>
                        <BoxCarrou name="Maria Denise" photo="/maria.png" text="Com o Mìti Card foi possível realizar os procedimentos necessários para minha
                  saúde. Recomendo!"
                        />
                    </div>

                    <div style={{ padding: '0 10px' }}>
                        <BoxCarrou name="Erik Dias" photo="/erik.png" text="É um sistema incrível, um preço acessível, muitos benefícios, mas o melhor é o
                  sistema de cashback"
                        />
                    </div>


                </Slider>
            </div>

            <div className="border-t border-black opacity-15 mt-20" />

        </div>
    );
};


