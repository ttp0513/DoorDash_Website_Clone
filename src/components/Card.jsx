import { Button } from "@/components/Button";

const size = {
    default: "text-3xl",
    lg: "text-4xl"
}

export const Card = ({img, header, content, cta, link, children, wd, fontSize="default", variant }) => {

    return (
        <div className={`flex flex-col items-center ${wd || "w-[239px]"} flex-wrap text-center min-h-[400px]`}>
                {img && (
                <div>
                    <img
                        className="object-contain w-40 h-40"
                        src={img}
                        alt={header}
                        />
                </div>
                )}

            <div className={`font-bold ${size[fontSize]}`}>{header}</div>
            <p className="text-base font-medium py-3">{content}</p>
            
            <div>
                < Button 
                variant={variant}>
                <a className="sm:text-sm md:text-[17px] lg:text-l relative flex items-center justify-center gap-1" href={link}>
                    {cta}
                    {children}
                </a>
                </Button>

            </div>
            
        </div>
    );
}