import styles from '../styles/styles.module.css';
import { useProductCounter } from '../hooks/ProductCounterHook';
import { Product } from '../model';
import noImage from '../assets/no-image.jpg';

type props = {
    product: Product;
    children?: React.ReactElement[];
}

export const ProductCard = ({ product, children = [] }: props ) => {

    return (
        <div className={ styles.productCard }>
            { children }
            {/*
            <ProductImage img={ product.img } />

            <ProductTitle title={ product.title } />

            <ProductButtons />
            */}
        </div>
    )
}

export const ProductImage = ({ img = '' }) => {
    return (
        <>
            <img className={styles.productImg} src={ img ? img : noImage } alt={ img ? 'Product image' : 'Image not found' }/>
        </>
    )
}

export const ProductTitle = ({ title = 'Test Title' }: { title?: string }) => {
    return (
        <>
            <span className={styles.productDescription}>{ title }</span>
        </>
    )
}

export const ProductButtons = () => {
    const { counter, increment, decrement } = useProductCounter({});

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

