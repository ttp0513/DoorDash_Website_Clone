
export const Card = ({img, header, content, cta, link, children, wd }) => {
    return (
        <div className={`flex flex-col items-center ${wd || "w-[238px]"} flex flex-wrap text-center`}>
            <div>
                <img className="object-contain w-39 h-39" src={img} alt={`${header}`}/>
            </div>
            <div className="font-bold text-3xl">{header}</div>
            <p className="text-base py-3">{content}</p>
            <div>
                <a className="sm:text-sm md:text-[17px] lg:text-l text-primary  font-bold relative flex items-center justify-center gap-1" href={link}>
                    {cta}
                    {children}
                </a>


            </div>
            
        </div>
    );
}