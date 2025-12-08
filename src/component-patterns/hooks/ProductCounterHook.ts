import { RefObject, useEffect, useRef, useState } from "react";
import { onChangeArgs } from "../components/ProductCard";
import { Product } from "../model";
import { on } from "events";

type args = {
    product: Product
    value?: number,
    onChange?: ( args: onChangeArgs ) => void,
}

export const useProductCounter = ({ product, onChange, value = 0 }: args ) => {
    const [ counter, setCounter ] = useState( value );
    const isControlled: RefObject<boolean> = useRef( !!onChange );

    useEffect(() => setCounter( value ), [ value ]);
    
    const increment = ( value: number ) => { 
        if( isControlled.current ) return onChange!({ product, count: value });
        const newValue = Math.max( 0, counter + value );
        setCounter( newValue ); 
        onChange && onChange({ product, count: newValue }); 
    };
    
    const decrement = ( value: number ) => { 
        if( isControlled.current ) return onChange!({ product, count: value * -1 });
        const newValue = Math.max( 0, counter - value );
        setCounter( newValue ); 
        onChange && onChange({ product, count: newValue }); 
    };

    return { counter, increment, decrement };
}