import Image from "next/image";
import ContainerGrid from "./container";

const Ilimit = [
    {
        hed3: 'Itáu',
        text: 'As transfêrencias caem na mesma hora'
    },
    {
        hed3: 'TED',
        text: 'São creditados na mesma hora'
    },
    {
        hed3: 'DOC',
        text: 'São creditadas no próximo dia útil'
    },
]

export function SectionTranfering() {
    return(
        <ContainerGrid>
            <div className="flex flex-col justify-between pt-28 @desktop:flex-row">
                <div className="flex flex-col justify-center items-center w-full text-center @desktop:items-start @desktop:justify-start @desktop:text-left">
                    <span className="text-base font-bold text-orange-500">SERVIÇOS</span>
                    <h2 className="text-6xl font-bold text-black my-11 max-w-2xl">Transferências grátis sempre que precisar</h2>
                    <p className="text-base font-medium text-black/90 max-w-2xl">Precisa enviar dinheiro para outro banco ou tem que sacar uma grana para pagar aquela conta? Com o App Itáu você resolve padinho! Você pode transferir direto pelo app e sacar no caixa eletrônico do Itáu ou da Rede Banco 24 Horas mais próximo</p>
                    <ul className="flex flex-col pt-16 pb-16 gap-6 @desktop:pb-0">
                        {Ilimit.map((item, index) => (
                            <li className={`flex items-center justify-between max-w-2xl ${index === 1 ? 'border-y border-black/10 py-4' : ''}`} key={index}>
                                <h3 className="text-3xl font-bold text-black" >{item.hed3}</h3>
                                <p className="text-base font-medium text-black">{item.text}</p>
                                <span className="text-base font-bold text-orange-500">Ilimitada</span>
                                <span className="text-base font-bold text-orange-500">Gratuita</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex justify-center w-full h-full">
                    <Image src={"/CellPhone.png"} alt="Celular" width={430} height={700}/>
                </div>
            </div>
        </ContainerGrid>
    )
}