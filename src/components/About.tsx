import Image from "next/image"
import midCard from '../assets/miticard.jpg'



export const About = () => {
    return (
        <div className="m-24">
            <div className="max-w-[1080px] w-full m-auto">
                <div className="flex gap-4">
                    <div className="bg-white p-10 rounded-lg">
                        <Image src={midCard} alt="About" width={1500} height={540} className="rounded-lg " />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-textPrimary text-base">PARCERIA CONSOLIDADA</span>
                        <span className="text-textPrimary text-7xl font-bold">Mìticard + Vida saúde</span>
                        <span className="text-textPrimary text-lg">Miticard e Vida Saúde Seguros caminham de mãos dadas em uma parceria já consolidada. Juntas, nossas instituições estão comprometidas em oferecer os melhores serviços e benefícios de saúde para você e sua família, garantindo qualidade, segurança e cuidado em cada atendimento.</span>
                    </div>
                </div>


            </div>
        </div>

    )
}