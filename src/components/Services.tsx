import { BoxText } from "./BoxText"



export const Services = () => {
    return (
        <div className=" max-w-[1080px] w-full m-auto">

            <div className="flex flex-col text-textPrimary gap-6">
                <span className="text-sm font-light">SERVIÇOS NA</span>
                <span className="text-6xl font-bold">Saúde</span>
                <span className="text-lg font-normal">Com até 60% de descontos em:</span>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 mt-10">
                <div className="flex gap-4">
                    <BoxText text="Consultas" />
                    <BoxText text="Cirurgias" />
                    <BoxText text="Exames de Imagem" />
                    <BoxText text="Exames Laboratorias" />
                </div>
                <div className="flex gap-4">
                    <BoxText text="Farmácias" />
                    <BoxText text="Odontologia" />
                </div>
            </div>
            <div className="border-t border-black opacity-15 mt-20" />


        </div>
    )
}