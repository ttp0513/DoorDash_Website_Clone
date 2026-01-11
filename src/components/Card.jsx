import { Button } from "@/components/Button";

const position = {
  left: "text-left",
  default: "text-center",
}

const color = {
  default: "text-headline",
  white: "text-white"
}
export const Card = ({
  img,
  header,
  subheader,
  content,
  textPosition = "default",
  cta,
  link,
  warning,
  textColor = "default"
}) => {

  return (
    
    <div className={`flex flex-col h-full items-${textPosition === "left" ? "start" : "center"} ${position[textPosition]} overflow-hidden`}>

       {/* Media: Video ratio (16/9) on mobile, Square (1/1) on large screens */}
      {img && (
      <div className="w-full relative aspect-video lg:aspect-square overflow-hidden bg-gray-100">

              <img 
                src={img} 
                alt={header} 
                className="absolute inset-0 w-full h-full object-cover" 
              />
      </div>)}

      {/* Text content */}

      <div className="space-y-4 py-4 w-[90%]">
        <h1 className={` text-2xl sm:text-4xl font-bold ${color[textColor]}`}>{header}</h1>

        {subheader && (
          <h3 className={`text-lg font-semibold ${color[textColor]}`}>{subheader}</h3>
        )}
        <p className={`font-medium text-sm sm:text-l md:text-[16px] ${color[textColor]}`}>
          {content}
        </p>
      </div>

      {/* CTA + Warning */}
      <div>
        <Button 
        link={link}
        >{cta}</Button>
      </div>


      <div className="py-4">
        {warning && (
            <p className="text-xs font-medium text-headline ">
            {warning}
            </p>
        )}
        </div>
      </div>
   
      
  );
};
