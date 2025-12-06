import styles from '../styles/styles.module.css';
import { useProductCounter } from '../hooks/ProductCounterHook';
import { Product } from '../model';
import noImage from '../assets/no-image.jpg';

type props = {
    product: Product;
}

export const ProductCard = ({ product }: props ) => {

    const { counter, increment, decrement } = useProductCounter({});

    return (
        <div className={ styles.productCard }>
            <img className={styles.productImg} src={ product.img ? product.img : noImage } alt={ product.img ? product.title : 'Image not found' }/>
            {/*<img className={styles.productImg} src={noImage} alt="Image not found"/>*/}

            <span className={styles.productDescription}>{ product.title }</span>

            <div className={styles.buttonsContainer}>
                <button className={styles.buttonMinus} onClick={() => decrement( 1 )}>-</button>

                <div className={styles.countLabel}>{counter}</div>

                <button className={styles.buttonAdd} onClick={() => increment( 1 )}>+</button>
            </div>
        </div>
    )
}
