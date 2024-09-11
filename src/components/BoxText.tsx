import { FaArrowRight } from "react-icons/fa6";


interface BoxTextProps {
    text: string;
}

interface BoxTextTwoProps {
    title: string;
    text: string;
}

export const BoxText = ({ text }: BoxTextProps) => {
    return (
        <>
            <div className="w-[230px] h-[120px] shadow-lg  flex items-center justify-center rounded-md font-bold cursor-pointer transition-transform transform duration-300 hover:scale-90">
                <span className="text-bgButton text-2xl w-[200px] text-center ">{text}</span>
            </div>

        </>
    )
}


export const BoxTextTwo = ({ text, title }: BoxTextTwoProps) => {

    return (
        <>
            <div
                className="w-[430px] h-[320px] p-10 gap-6 shadow-lg flex flex-col items-center rounded-md font-bold cursor-pointer text-textPrimary hover:text-white hover:bg-textPrimary hover:gap-3 transition-all duration-500 ease-out transform hover:-translate-y-3">
                <span className=" text-2xl w-[200px] text-center hover:text-white">{title}</span>
                <span className="text-base] text-center" >{text}</span>
                <FaArrowRight size={30} className="text-background" />
            </div>

        </>
    )
}