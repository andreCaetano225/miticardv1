import { BoxTextTwo } from "./BoxText"




export const MitiVans = () => {
    return (
        <>
            <div className=" max-w-[1220px] w-full m-auto">

                <div className="flex flex-col text-textPrimary gap-6">
                    <span className="text-sm font-light">VANTAGENS DE SER</span>
                    <span className="text-6xl font-bold">Mìti</span>
                </div>

                <div className="grid grid-cols-3 gap-10 mt-20">
                    <BoxTextTwo title="SEM CARÊNCIA" text="O Mìticard é um plano que não possui carência, permitindo que você aproveite
                    todos os seus benefícios e serviços
                    imediatamente após a contratação. Desfrute de cobertura completa desde o primeiro dia!"/>
                    <BoxTextTwo title="VALORES ACESSÍVEIS" text="O Mìticard oferece valores acessíveis para que você tenha acesso a uma
                    cobertura completa sem comprometer seu orçamento.
                    Com preços competitivos, garantimos que você possa aproveitar todos os benefícios e serviços de
                    forma econômica e
                    vantajosa."/>
                    <BoxTextTwo title="SEM LIMITE DE IDADE" text="O Mìticard não possui limite de idade, garantindo que pessoas de todas as
                    faixas etárias possam aproveitar seus
                    benefícios e coberturas. Seja qual for a sua idade, você tem acesso a um plano completo e inclusivo.
                  "/>
                    <BoxTextTwo title="PLANOS ANUAIS" text="Os planos do Mìticard são anuais, oferecendo uma cobertura completa e contínua
                    durante todo o ano. Desfrute dos
                    benefícios e serviços sem interrupções, com a conveniência de uma renovação anual."/>
                    <BoxTextTwo title="SISTEMA DE CASHBACK" text="O Mìticard possui um sistema de cashback que permite aos clientes receberem de
                    volta uma parte do valor gasto. O valor
                    acumulado pode ser utilizado em diversos parceiros do Mìticard, proporcionando ainda mais economia e
                    vantagens
                    exclusivas."/>
                    <BoxTextTwo title="SISTEMA DE INDICAÇÃO" text="Todos os clientes Mìticard, poderão indicar pessoas, assim ganhando uma
                    porcentagem de ganho de toda a sua rede de afiliados, a qual resulta em uma forma de ganho
                    totalmente passiva, permitindo usufruir das vantagens que o Mìticard oferece no conforto da sua
                    casa.
                  "/>
                </div>



                <div className="border-t border-black opacity-15 mt-20" />


            </div>

        </>
    )
}