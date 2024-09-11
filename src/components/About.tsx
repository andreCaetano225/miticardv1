import Image from "next/image"
import midCard from '../assets/miticard.jpg'



export const About = () => {
    return (
        <div className="m-24">
            <div className="max-w-[1220px] w-full m-auto">
                <div className="flex items-center gap-20">
                    <div className="bg-white p-10 rounded-lg">
                        <Image src={midCard} alt="About" width={1500} height={540} className="rounded-lg " />
                    </div>
                    <div className="flex flex-col gap-6">
                        <span className="text-textPrimary text-base">PARCERIA CONSOLIDADA</span>
                        <div className="flex flex-col gap-1">
                            <span className="text-textPrimary text-6xl font-bold">Mìticard + Vida saúde</span>
                            <span className="text-textPrimary text-lg">Miticard e Vida Saúde Seguros caminham de mãos dadas em uma parceria já consolidada. Juntas, nossas instituições estão comprometidas em oferecer os melhores serviços e benefícios de saúde para você e sua família, garantindo qualidade, segurança e cuidado em cada atendimento.</span>
                        </div>

                    </div>
                </div>

                <div className="border-t border-black opacity-15 mt-20" />

            </div>
        </div>

    )
}