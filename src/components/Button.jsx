export const Button = ({
  className,
  variant = "primary",
  children,
  ...props
}) => {

  const variantClasses = {
    primary: "bg-primary text-primary-foreground hover:bg-primary-dark",
    secondary: "bg-white text-muted hover:bg-white",
    hero: "bg-transparent text-primary hover:bg-transparent",
    body: "bg-primary text-primary-foreground hover:bg-primary-dark"
  };

  const classes = `
    py-1.5 px-3 text-[17px] relative overflow-hidden hover:cursor-pointer rounded-full font-bold focus:outline-none focus-visible:ring-2 focus-visible:ring-primary
    ${variantClasses[variant]}
    ${className || ""}
  `;

  return (
    <button className={classes} {...props}>
        {children}
    </button>
  );
};

