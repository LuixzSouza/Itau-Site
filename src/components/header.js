import Image from "next/image";

export function Header() {
    return(
        <div className="pl-28 w-full h-20 flex flex-row items-center justify-between bg-orange-500">
            <div className="flex flex-row items-center gap-8" >
                <Image src={"./logo.svg"} alt="Logo" width={47} height={47}/>
                <a className="flex flex-row items-center gap-2 text-white font-bold" >
                    <p>Para você</p>
                    <Image src={"./arrowDow.svg"} alt="ArrowDow" width={8} height={4} />
                </a>
                <a className="flex flex-row items-center gap-2 text-white font-bold" >
                    <p>Para empresas</p>
                    <Image src={"./arrowDow.svg"} alt="ArrowDow" width={8} height={4} />
                </a>
                <a className="flex flex-row items-center gap-2 text-white font-bold" >
                    <p>Serviços</p>
                    <Image src={"./arrowDow.svg"} alt="ArrowDow" width={8} height={4} />
                </a>
                <a className="flex flex-row items-center gap-2 text-white font-bold" >
                    <p>Ajuda</p>
                    <Image src={"./arrowDow.svg"} alt="ArrowDow" width={8} height={4} />
                </a>
            </div>
            <div className="h-full flex flex-row items-center">
                <div className="w-72 h-full gap-2 flex flex-row items-center justify-center" >
                    <Image src={"./IconSearch.svg"} alt="Logo" width={18} height={18}/>
                    <p className="font-bold text-base text-white">Buscar</p>
                </div>
                <div className="w-72 h-full pr-28 gap-2 bg-blue-500 flex flex-row items-center justify-center" >
                    <Image src={"./IconGroup.svg"} alt="Logo" width={18} height={18}/>
                    <p className="font-bold text-base text-white" >Acessar conta</p>
                </div>
            </div>
        </div>
    )
}