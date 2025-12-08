import { useState } from "react";
import { onChangeArgs } from "../components/ProductCard";
import { Product } from "../model";

type args = {
    product: Product
    initialValue?: number,
    onChange?: ( args: onChangeArgs ) => void,
}

export const useProductCounter = ({ product, onChange, initialValue = 0 }: args ) => {
    const [ counter, setCounter ] = useState( initialValue );
    
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