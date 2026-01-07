import { Button } from "@/components/Button";

export const HeroCard = ({img, header, content, cta, link, children, variant }) => {

    return (
        <div className={`flex flex-col items-center w-[239px] flex-wrap text-center min-h-[400px]`}>
                {img && (
                <div>
                    <img
                        className="object-contain w-40 h-40"
                        src={img}
                        alt={header}
                        />
                </div>
                )}

            <div className="text-3xl font-bold ">{header}</div>
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