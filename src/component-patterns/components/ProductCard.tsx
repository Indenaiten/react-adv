import styles from '../styles/styles.module.css';
import { useProductCounter } from '../hooks/ProductCounterHook';
import { Product, ProductContext } from '../model';
import { Context, createContext, JSX } from 'react';

export const context: Context<ProductContext> = createContext<ProductContext>({} as ProductContext);
const { Provider } = context;

export type props = {
    product: Product;
    initialValues?: InitialValues;
    value?: number;
    className?: string;
    style?: React.CSSProperties;
    onChange?: ( args: onChangeArgs ) => void;
    //children?: React.ReactElement | React.ReactElement[];
    children?: ( msg: string ) => JSX.Element;
}

export type InitialValues = {
    count?: number;
    minCount?: number;
    maxCount?: number;
}

export type onChangeArgs = {
    product: Product;
    count: number;
}


export const ProductCard = ({ product, initialValues = { count: 0, minCount: 0 }, value = 0, className, style, onChange, children = () => <></> }: props ) => {
    const { counter, increment, decrement, maxCount } = useProductCounter({ product, onChange, initialValues, value });

    return (
        <Provider value={{ product, counter, increment, decrement, maxCount }}>
            <div className={ `${styles.productCard} ${className}` } style={style}>
                { children( 'Hi World !' ) }
            </div>
        </Provider>
    )
}
