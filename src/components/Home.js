import Image from "next/image";
import ContainerGrid from "./container";

export function Homing() {
    return(
        <div className="bg-heroImage bg-no-repeat bg-cover pt-20 @desktop:pt-32">
            <ContainerGrid>
                <div className="relative flex flex-col items-center justify-between text-center @desktop:text-left @desktop:flex-row" >
                    <div className="pb-3" >
                        <h1 className="text-5xl font-bold text-white max-w-max mb-8 @desktop:max-w-xl @desktop:text-7xl">Tenha seu banco na palma da mão.</h1>
                        <p className="text-xl text-white font-medium mb-8">Todas as operações que você precisa em um só lugar. Simples, completo e feito para você</p>
                        <div className="flex items-center justify-center @desktop:items-start @desktop:justify-start gap-3">
                            <Image src={"./AppAplle.svg"} alt="AppleStore" width={176} height={64} />
                            <Image src={"./AppStore.svg"} alt="AppStore" width={176} height={64} />
                        </div>
                        <p className="relative pt-12 text-[#F6CA75] hidden @desktop:block">Continue Explorando</p>
                    </div>
                    <div>
                        <Image src={"/woman.png"} alt="AppStore" width={703} height={703} />
                    </div>
                </div>
            </ContainerGrid>
        </div>
    )
}