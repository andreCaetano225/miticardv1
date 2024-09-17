import { IoMdArrowForward } from "react-icons/io"




export const Contact = () => {
    return (
        <>
            <div className=" mt-20">
                <div className="flex flex-col items-center text-textPrimary gap-6">
                    <span className="text-sm font-light">ENTRE EM </span>
                    <span className="text-6xl font-bold">Contato</span>
                </div>
            </div>
            <div className="max-w-[1220px] w-full m-auto flex flex-col mt-20">

                <div className="flex flex-row justify-between">
                    <div className="bg-[#E8EDEF] w-[500px] p-6 shadow-xl flex flex-col gap-8">
                        <img src="/cardplan.png" alt="aaa" className="w-[450px]" />


                        <span className="text-titleBoxTow text-3xl font-semibold">Mìticard</span>

                        <div className="flex flex-col text-textPrimary">
                            <span> {`> Cariri`}</span>
                            <span> {`> Fortaleza`}</span>
                        </div>


                        <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-2">
                                <span className="text-titleBoxTow font-semibold">Telefone Cariri:</span>
                                <span className="text-titleBoxTow font-light"> +55 (88) 99868-8020</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="text-titleBoxTow font-semibold">Telefone Fortaleza:</span>
                                <span className="text-titleBoxTow font-light"> +55 (85) 9671-6583</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="text-titleBoxTow font-semibold">Email Cariri:</span>
                                <span className="text-titleBoxTow font-light"> miticardsuporte@gmail.com</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="text-titleBoxTow font-semibold">Email Fortaleza:</span>
                                <span className="text-titleBoxTow font-light">  mitcardfortaleza@gmail.com</span>
                            </div>
                        </div>





                    </div>

                    <div className="bg-[#E8EDEF] w-[600px] p-12 flex flex-col gap-8">

                        <div className="flex justify-between items-center">
                            <div className="flex flex-col gap-2">
                                <label className="text-textPrimary text-sm">NOME</label>
                                <input
                                    type="text"
                                    className="bg-white text-transparent border border-gray-300 rounded-md w-[230px] focus:border-bgButton focus:outline-none focus:ring-2 focus:ring-bgButton p-2"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-textPrimary text-sm">NÚMERO</label>
                                <input
                                    type="text"
                                    className="bg-white text-transparent border border-gray-300 rounded-md w-[230px] focus:border-bgButton focus:outline-none focus:ring-2 focus:ring-bgButton p-2"
                                />
                            </div>




                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-textPrimary text-sm">EMAIL</label>
                            <input
                                type="text"
                                className="bg-white text-transparent border border-gray-300 rounded-md  focus:border-bgButton focus:outline-none focus:ring-2 focus:ring-bgButton p-2"
                            />
                        </div>


                        <div className="flex flex-col gap-2">
                            <label className="text-textPrimary text-sm">ASSUNTO</label>
                            <input
                                type="text"
                                className="bg-white text-transparent border border-gray-300 rounded-md  focus:border-bgButton focus:outline-none focus:ring-2 focus:ring-bgButton p-2"
                            />
                        </div>


                        <div className="flex flex-col gap-2">
                            <label className="text-textPrimary text-sm">MENSAGEM</label>
                            <textarea
                                className="bg-white text-transparent border border-gray-300 rounded-md  focus:border-bgButton focus:outline-none focus:ring-2 focus:ring-bgButton p-12"
                            />
                        </div>

                        <button className="bg-bgButton w-full p-4 flex items-center justify-center text-white gap-2 rounded-md  transition transform hover:-translate-y-1 hover:shadow-lg ">
                            ENVIAR
                            <IoMdArrowForward />
                        </button>


                    </div>
                </div>



                <div className="border-t border-black opacity-15 mt-20" />


            </div>
        </>
    )
}