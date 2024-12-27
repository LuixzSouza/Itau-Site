import Image from "next/image";
import Link from "next/link";
import ContainerGrid from "./container";

const HeadingLink = [
    {
        Texto: 'Para você',
    },
    {
        Texto: 'Para empresas',
    },
    {
        Texto: 'Serviços',
    },
    {
        Texto: 'Ajuda',
    },
]

export function Header() {
    return(
        <div className="fixed top-0 w-full h-20 flex flex-row items-center justify-between bg-orange-500 z-50">
            <ContainerGrid className={"flex items-center justify-between h-full w-full @desktop:pr-0"} >
                <div className=" @desktop:w-full flex flex-row items-center gap-8" >
                    <Link href={"/#"}>
                        <Image src={"./logo.svg"} alt="Logo" width={47} height={47}/>
                    </Link>
                    <div className="hidden @screen1200:flex @desktop:items-center @desktop:gap-8 @desktop:w-full" >
                        {HeadingLink.map((item, index) => (
                            <a className="flex flex-row items-center gap-2 text-white/70 font-bold hover:text-white transition-all ease-in duration-300 cursor-pointer group" key={index} >
                                <p>{item.Texto}</p>
                                <Image src={"./arrowDow.svg"} alt="ArrowDow" className="group-hover:rotate-180 group-hover:scale-110 transition-all ease-in-out duration-300" width={8} height={4} />
                            </a>
                        ))}
                    </div>
                </div>
                <div className="w-full h-full flex flex-row items-center">
                    <div className="w-full max-w-72 h-full gap-2 flex flex-row items-center justify-center" >
                        <Image src={"./IconSearch.svg"} alt="Logo" width={18} height={18}/>
                        <p className="font-bold text-base text-white cursor-pointer">Buscar</p>
                    </div>
                    <div className="w-full max-w-72 h-full gap-2 bg-blue-500 flex flex-row items-center justify-center hover:bg-blue-500/95 cursor-pointer" >
                        <Image src={"./IconGroup.svg"} alt="Logo" width={18} height={18}/>
                        <p className="font-bold text-base text-white" >Acessar conta</p>
                    </div>
                </div>
                <div className="px-6 block @desktop:hidden" >
                    <Image src={"/menu-aberto.png"} alt="Menu" width={44} height={44} className="filter invert brightness-200"/>
                </div>
            </ContainerGrid>
        </div>
    )
}