

interface BoxTextProps {
    text: string;
}

export const BoxText = ({ text }: BoxTextProps) => {
    return (
        <>
            <div className="w-[230px] h-[120px] shadow-lg  flex items-center justify-center rounded-md font-bold cursor-pointer">
                <span className="text-bgButton text-2xl w-[200px] text-center transition-transform transform duration-300 hover:scale-90">{text}</span>
            </div>

        </>
    )
}