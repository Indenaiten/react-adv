import styles from '../styles/styles.module.css';
import { useProductCounter } from '../hooks/ProductCounterHook';
import { Product } from '../model';
import noImage from '../assets/no-image.jpg';
import { Context, useContext, createContext } from 'react';

type ProductContextProps = {
    product: Product;
    counter: number;
    increment: ( value: number ) => void;
    decrement: ( value: number ) => void;
}

export const productContext: Context<ProductContextProps> = createContext<ProductContextProps>({} as ProductContextProps);
const { Provider } = productContext;

type props = {
    product: Product;
    children?: React.ReactElement[];
}

export const ProductCard = ({ product, children = [] }: props ) => {

    const { counter, increment, decrement } = useProductCounter({});

    return (
        <Provider value={{ product, counter, increment, decrement }}>
            <div className={ styles.productCard }>
                { children }
                {/*
                <ProductImage img={ product.img } />

                <ProductTitle title={ product.title } />

                <ProductButtons />
                */}
            </div>
        </Provider>
    )
}

export const ProductImage = ({ img = '' }) => {
    const { product } = useContext( productContext );
    const image: string = !img ? product.img || '' : img;

    return (
        <>
            <img className={styles.productImg} src={ image ? image : noImage } alt={ image ? 'Product image' : 'Image not found' }/>
        </>
    )
}

export const ProductTitle = ({ title = null }: { title?: string | null }) => {
    const { product } = useContext( productContext );
    const productTitle: string = !title ? product.title || 'Test Title' : title;

    return (
        <>
            <span className={styles.productDescription}>{ productTitle }</span>
        </>
    )
}

export const ProductButtons = () => {
    const { counter, increment, decrement } = useContext( productContext );

    return (
        <>
            <div className={styles.buttonsContainer}>
                <button className={styles.buttonMinus} onClick={() => decrement( 1 )}>-</button>

                <div className={styles.countLabel}>{counter}</div>

                <button className={styles.buttonAdd} onClick={() => increment( 1 )}>+</button>
            </div>
        </>
    )
}

ProductCard.Image = ProductImage;
ProductCard.Title = ProductTitle;
ProductCard.Buttons = ProductButtons;
