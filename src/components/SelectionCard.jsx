export const SelectionCard = ({label, isActive, onClick}) => {
    return (
         <button
            onClick = {onClick} 
            className= {`
                py-2 text-l font-semibold border-b-3
                ${ isActive ? "border-headline text-headline bg-secondary-muted" : "border-transparent text-muted hover:bg-secondary-muted" }`} 
        >
           {label}
        </button>
    );
};