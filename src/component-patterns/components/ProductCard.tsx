import styles from '../styles/styles.module.css';
import { useProductCounter } from '../hooks/ProductCounterHook';
import { Product, ProductContext } from '../model';
import { Context, createContext } from 'react';
import { on } from 'events';

export const context: Context<ProductContext> = createContext<ProductContext>({} as ProductContext);
const { Provider } = context;

export type props = {
    product: Product;
    count?: number;
    className?: string;
    style?: React.CSSProperties;
    onChange?: ( args: onChangeArgs ) => void;
    children?: React.ReactElement | React.ReactElement[];
}

export type onChangeArgs = {
    product: Product;
    count: number;
}

export const ProductCard = ({ product, count = 0, className, style, onChange, children = [] }: props ) => {

    const { counter, increment, decrement } = useProductCounter({ product, onChange, value: count });

    return (
        <Provider value={{ product, counter, increment, decrement }}>
            <div className={ `${styles.productCard} ${className}` } style={style}>
                { children }
            </div>
        </Provider>
    )
}
