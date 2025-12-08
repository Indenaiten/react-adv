import { RefObject, useEffect, useRef, useState } from "react";
import { InitialValues, onChangeArgs } from "../components/ProductCard";
import { Product } from "../model";
import { on } from "events";
import { n } from "react-router/dist/development/index-react-server-client-CCjKYJTH";

type args = {
    product: Product
    initialValues?: InitialValues,
    value?: number,
    onChange?: ( args: onChangeArgs ) => void,
}

export const useProductCounter = ({ product, onChange, initialValues = { count: 0, minCount: 0 }, value = 0}: args ) => {
    const [ counter, setCounter ] = useState( initialValues.count || value );
    const isControlled: RefObject<boolean> = useRef( !!onChange );
    const isMounted: RefObject<boolean> = useRef( false );
    const maxCount: RefObject<number> = useRef( initialValues.maxCount || Infinity );

    console.log(initialValues);

    useEffect(() => { if( isMounted.current ) setCounter( value ) }, [ value ]);
    useEffect(() => { isMounted.current = true }, []);
    
    const increment = ( value: number ) => { 
        if( isControlled.current ) return onChange!({ product, count: value });
        let newValue = Math.max( 0, counter + value );
        newValue = Math.min( newValue, initialValues.maxCount || Infinity );
        setCounter( newValue ); 
        onChange && onChange({ product, count: newValue }); 
    };
    
    const decrement = ( value: number ) => { 
        if( isControlled.current ) return onChange!({ product, count: value * -1 });
        let newValue = Math.max( 0, counter - value );
        newValue = Math.max( newValue, initialValues.minCount || 0 );
        setCounter( newValue ); 
        onChange && onChange({ product, count: newValue }); 
    };

    return { counter, increment, decrement, maxCount: maxCount.current };
}