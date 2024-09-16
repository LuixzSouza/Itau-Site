import Image from "next/image";
import ContainerGrid from "./container";

export function Homing() {
    return(
        <div className="bg-heroImage bg-no-repeat bg-cover">
            <ContainerGrid>
                <div className="relative flex items-center justify-between" >
                    <div>
                        <h1 className="text-7xl font-bold text-white max-w-xl mb-8">Tenha seu banco na palma da mão.</h1>
                        <p className="text-xl text-white font-medium mb-8">Todas as operações que você precisa em um só lugar. Simples, completo e feito para você</p>
                        <div className="flex gap-3">
                            <Image src={"./AppAplle.svg"} alt="AppleStore" width={176} height={64} />
                            <Image src={"./AppStore.svg"} alt="AppStore" width={176} height={64} />
                        </div>
                        <p className="absolute bottom-8 left-0 text-[#F6CA75]">Continue Explorando</p>
                    </div>
                    <div>
                    <Image src={"/woman.png"} alt="AppStore" width={703} height={703} />
                    </div>
                </div>
            </ContainerGrid>
        </div>
    )
}