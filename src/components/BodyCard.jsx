import { Button } from "@/components/Button"
const textPos = {
    left: "text-left",
    default: "text-center",
    right: "text-right"
}

export const BodyCard = ({img, header, subheader, content, cta, textPosition="default", link, children, warning}) => {
    return (
        <div className={`relative overflow-hidden flex flex-col ${textPos[textPosition]}`}>
            <div className="space-y-5"> 
           
                    <img 
                        className="object-contain min-h-md"
                        src={img}
                        alt={header}>
                    </img>
          
                <h1 className="text-2xl sm:text-4xl font-bold text-headline">{header}</h1>
                {subheader && ( 
                    <h3 className="text-lg font-semibold text-gray-800"> {subheader} </h3> 
                    )}
                <p className="font-medium text-[12px] sm:text-sm text-headline">{content}</p>
                <Button>
                <a className=" text-sm md:text-[17px] sm:text-l relative flex items-center justify-center gap-1" href={link}>
                    {cta}
                    {children}
                </a>
                </Button>
                {warning && (
                    <p className="text-xs font-medium text-headline ">{warning}</p>
                )
                }
            </div>
        </div>

    );
}