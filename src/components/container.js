import { twMerge } from "tailwind-merge"

export default function ContainerGrid({children, className}) {
    const defaultClass = "px-6 w-full @desktop:px-28 mx-auto";
    const combinedClasses = twMerge(defaultClass, className)

    return (
        <div className={combinedClasses}>
            {children}
        </div>
    )
}