
interface BoxContentProps {
    subtitle: string;
    title: string;
    text: string;
    img: string;
    textbox1: string;
    textbox2: string;
    textbox3: string;
}


export const BoxContent = ({ subtitle, img, text, textbox1, textbox2, textbox3, title }: BoxContentProps) => {
    return (
        <>
            <div className=" max-w-[1220px] w-full m-auto mt-20">

                <div className="flex flex-col text-textPrimary gap-6">
                    <span className="text-sm font-light">{subtitle}</span>
                    <span className="text-6xl font-bold">{title}</span>
                </div>

                <div className="w-full h-[420px] shadow-lg  flex items-center justify-between rounded-md font-bold p-20 mt-16">
                    <div className="flex flex-col gap-6">
                        <span className="text-titleBoxTow w-[560px] text-[1.3rem]">

                            {text}
                        </span>

                        <div className="flex flex-col gap-2">
                            <div className="flex gap-4">
                                <img src="/check.svg" alt="asdas" />
                                <span className="text-textPrimary font-light">{textbox1}</span>
                            </div>

                            <div className="flex gap-4">
                                <img src="/check.svg" alt="asdas" />
                                <span className="text-textPrimary font-light">{textbox2}</span>
                            </div>

                            <div className="flex gap-4">
                                <img src="/check.svg" alt="asdas" />
                                <span className="text-textPrimary font-light">{textbox3}</span>
                            </div>
                        </div>


                    </div>



                    <img src={img} alt="asdas" />



                </div>


                <div className="border-t border-black opacity-15 mt-20" />


            </div>
        </>
    )
}