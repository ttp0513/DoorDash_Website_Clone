export const SelectionCard = ({label, isActive, onClick}) => {
    return (
         <button
            onClick = {onClick} 
            className= {`
                py-2 text-l font-bold border-b-3 hover:bg-secondary-muted
                ${ isActive ? "border-headline text-headline " : "border-transparent text-muted" }`} 
        >
           {label}
        </button>
    );
};