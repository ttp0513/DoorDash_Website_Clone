export const Button = ({
  className,
  variant = "primary",
  children,
  ...props
}) => {

  const variantClasses = {
    primary: "bg-primary text-primary-foreground",
    secondary: "bg-white text-muted ",
  };



  const classes = `
    py-1 px-3 text-[18px] relative overflow-hidden rounded-full font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer hover:bg-primary-dark shadow-primary/25
    ${variantClasses[variant]}
    ${className || ""}
  `;

  return (
    <button className={classes} {...props}>
      <span className="relative flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};

