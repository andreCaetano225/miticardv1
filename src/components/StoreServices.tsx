import { BoxText } from "./BoxText"




export const StoreServices = () => {
    return (
        <>
            <div className=" max-w-[1080px] w-full m-auto">

                <div className="flex flex-col text-textPrimary gap-6 items-center mt-28">
                    <span className="text-sm font-light">GANHE CASHBACKS COM</span>
                    <span className="text-6xl font-bold">Compras e Serviços</span>
                </div>

                <div className="grid grid-cols-4 gap-4 mt-10">
                    <BoxText text="Salões de Beleza" />
                    <BoxText text="Serviços Automotivos" />
                    <BoxText text="Postos de Combustíveis" />
                    <BoxText text="Viagens" />
                    <BoxText text="Restaurantes" />
                    <BoxText text="Óticas" />
                    <BoxText text="Academias" />
                    <BoxText text="Barbearia" />
                </div>


            </div>
        </>
    )
}