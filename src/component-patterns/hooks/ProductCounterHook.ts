import { useEffect, useState } from "react";
import { onChangeArgs } from "../components/ProductCard";
import { Product } from "../model";

type args = {
    product: Product
    value?: number,
    onChange?: ( args: onChangeArgs ) => void,
}

export const useProductCounter = ({ product, onChange, value = 0 }: args ) => {
    const [ counter, setCounter ] = useState( value );

    useEffect(() => {
        setCounter( value );
    }, [ value ]);
    
    const increment = ( value: number ) => { 
        const newValue = Math.max( 0, counter + value );
        setCounter( newValue ); 
        onChange && onChange({ product, count: newValue }); 
    };
    
    const decrement = ( value: number ) => { 
        const newValue = Math.max( 0, counter - value );
        setCounter( newValue ); 
        onChange && onChange({ product, count: newValue }); 
    };

    return { counter, increment, decrement };
}