
interface BoxCarrouProps {
    text: string;
    photo: string;
    name: string;
}




export const BoxCarrou = ({ name, photo, text }: BoxCarrouProps) => {
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
