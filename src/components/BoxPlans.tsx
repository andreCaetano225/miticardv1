


interface BoxPlansProps {
    title: string;
    subtitle: string;
    price: string;
    pricex: string;
}


export const BoxPlans = ({ price, pricex, subtitle, title }: BoxPlansProps) => {
    return (
        <>
            <div className="w-[370px] h-[420px] shadow-2xl bg-[#f4f2f2]  flex flex-col gap-10 items-center  justify-center rounded-md font-bold  mt-16">

                <div className="flex flex-col items-center mt-8 gap-2">
                    <span className="text-4xl text-textPrimary font-bold uppercase">{title}</span>
                    <span className="text-sm font-semibold text-textPrimary">{subtitle}</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <span className="text-sm font-semibold text-textPrimary">{pricex}</span>
                    <span className="text-6xl text-textPrimary font-bold">{price}</span>
                </div>

                <button className="bg-bgButton p-3 w-[150px] text-white rounded-lg  transition transform hover:-translate-y-1 hover:shadow-lg">EU QUERO</button>
            </div>



        </>
    )
}