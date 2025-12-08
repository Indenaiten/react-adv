import { useState } from "react";

type args = {
    initialValue?: number,
    onChange?: () => void,
}

export const useProductCounter = ({ initialValue = 0, onChange }: args ) => {
    const [ counter, setCounter ] = useState( initialValue );
    
    const increment = ( value: number ) => { setCounter( prev => Math.max( 0, prev + value )); onChange && onChange(); };
    const decrement = ( value: number ) => { setCounter( prev => Math.max( 0, prev - value )); onChange && onChange(); };

    return { counter, increment, decrement };
}