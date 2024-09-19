


interface BoxParceirosProps {
    title: string;
    textbox1?: string;
    textbox2?: string;
    textbox3?: string;
    textbox4?: string;
    img: string;
}




export const BoxParceiros = ({ img, title, textbox1, textbox2, textbox3, textbox4 }: BoxParceirosProps) => {
    return (
        <>
            <div>
                <div className="  mt-20 flex items-center justify-center ">
                    <div data-aos="fade-right" className=" w-[400px] md:w-full lg:w-full xl:w-full 2xl:w-full h-[690px] md:h-[420px] lg:h-[420px] xl:h-[420px] 2xl:h-[420px] shadow-2xl bg-[#f4f2f2] flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row items-center justify-between rounded-md font-bold p-20 mt-2 md:mt-16 lg:mt-16 xl:mt-16 2xl:mt-16">
                        <div className="flex flex-col gap-6 items-center">
                            <span className="text-titleBoxTow  text-2xl md:text-[2.3rem] lg:text-[2.3rem] xl:text-[2.3rem] 2xl:text-[2.3rem]">
                                {title}
                            </span>

                            <div className="flex flex-col gap-2">
                                {textbox1 && (
                                    <div className="flex gap-4">
                                        <img src="/check.svg" alt="asdas" />
                                        <span className="text-textPrimary font-light">{textbox1}</span>
                                    </div>
                                )}

                                {textbox2 && (
                                    <div className="flex gap-4">
                                        <img src="/check.svg" alt="asdas" />
                                        <span className="text-textPrimary font-light">{textbox2}</span>
                                    </div>
                                )}

                                {textbox3 && (
                                    <div className="flex gap-4">
                                        <img src="/check.svg" alt="asdas" />
                                        <span className="text-textPrimary font-light">{textbox3}</span>
                                    </div>
                                )}

                                {textbox4 && (
                                    <div className="flex gap-4">
                                        <img src="/check.svg" alt="asdas" />
                                        <span className="text-textPrimary font-light">{textbox4}</span>
                                    </div>
                                )}



                            </div>


                        </div>



                        <img src={img} alt="asdas" className="mt-5 md:mt-0 lg:mt-0 xl:mt-0 2xl:mt-0 w-[400px]" />



                    </div>



                </div>
            </div>
        </>
    )
}