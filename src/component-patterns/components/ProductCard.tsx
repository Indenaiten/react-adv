import styles from '../styles/styles.module.css';
import { useProductCounter } from '../hooks/ProductCounterHook';
import { Product, ProductContext } from '../model';
import { Context, createContext } from 'react';

export const context: Context<ProductContext> = createContext<ProductContext>({} as ProductContext);
const { Provider } = context;

type props = {
    product: Product;
    children?: React.ReactElement | React.ReactElement[];
}

export const ProductCard = ({ product, children = [] }: props ) => {

    const { counter, increment, decrement } = useProductCounter({});

    return (
        <Provider value={{ product, counter, increment, decrement }}>
            <div className={ styles.productCard }>
                { children }
            </div>
        </Provider>
    )
}
