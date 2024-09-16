import Image from "next/image";
import ContainerGrid from "./container";

export function SectionTranfering() {
    return(
        <ContainerGrid>
            <div className="flex justify-between mt-28">
                <div className="w-full">
                    <span className="text-base font-bold text-orange-500">SERVIÇOS</span>
                    <h2 className="text-6xl font-bold text-black my-11 max-w-2xl">Transferências grátis sempre que precisar</h2>
                    <p className="text-base font-medium text-black/90 max-w-2xl">Precisa enviar dinheiro para outro banco ou tem que sacar uma grana para pagar aquela conta? Com o App Itáu você resolve padinho! Você pode transferir direto pelo app e sacar no caixa eletrônico do Itáu ou da Rede Banco 24 Horas mais próximo</p>
                    <ul className="flex flex-col mt-16 gap-6">
                        <li className="flex items-center justify-between max-w-2xl">
                            <h3 className="text-3xl font-bold text-black" >Itáu</h3>
                            <p className="text-base font-medium text-black">As transfêrencias caem na mesma hora</p>
                            <span className="text-base font-bold text-orange-500">Ilimitada</span>
                            <span className="text-base font-bold text-orange-500">Gratuita</span>
                        </li>
                        <li className="flex items-center justify-between max-w-2xl py-4 border-y border-black/10">
                            <h3 className="text-3xl font-bold text-black" >TED</h3>
                            <p className="text-base font-medium text-black">São creditados na mesma hora</p>
                            <span className="text-base font-bold text-orange-500">Ilimitada</span>
                            <span className="text-base font-bold text-orange-500">Gratuita</span>
                        </li>
                        <li className="flex items-center justify-between max-w-2xl">
                            <h3 className="text-3xl font-bold text-black" >DOC</h3>
                            <p className="text-base font-medium text-black">São creditadas no próximo dia útil</p>
                            <span className="text-base font-bold text-orange-500">Ilimitada</span>
                            <span className="text-base font-bold text-orange-500">Gratuita</span>
                        </li>
                    </ul>
                </div>
                <div className="flex justify-center w-full h-full">
                    <Image src={"/CellPhone.png"} alt="Celular" width={430} height={700}/>
                </div>
            </div>
        </ContainerGrid>
    )
}