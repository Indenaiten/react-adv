import { useState } from "react";

type args = {
    initialValue?: number
}

export const useProductCounter = ({ initialValue = 0 }: args ) => {
    const [ counter, setCounter ] = useState( initialValue );
    
    const increment = ( value: number ) => setCounter( prev => Math.max( 0, prev + value ));
    const decrement = ( value: number ) => setCounter( prev => Math.max( 0, prev - value ));

    return { counter, increment, decrement };
}