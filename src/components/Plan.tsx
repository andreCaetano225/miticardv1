import { BoxPlans } from "./BoxPlans"
import Image from "next/image";
import Banner01 from '../assets/empre.png';




export const Plans = () => {
    return (
        <>
            <div className=" max-w-[1220px] w-full m-auto mt-20">

                <div className="flex flex-col text-textPrimary gap-6">
                    <span className="text-sm font-light">NOSSOS</span>
                    <span className="text-6xl font-bold">Planos</span>
                </div>

                <div className="flex items-center gap-10">
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