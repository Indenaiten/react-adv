import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';
import { use, useState } from 'react';
import { useProductCounter } from '../hooks/ProductCounterHook';

export const ProductCard = () => {

    const { counter, increment, decrement } = useProductCounter({});

    return (
        <div className={ styles.productCard }>
            <img className={styles.productImg} src="./coffee-mug.png" alt="Coffe Mug"/>
            {/*<img className={styles.productImg} src={noImage} alt="Image not found"/>*/}

            <span className={styles.productDescription}>Coffee Mug</span>

            <div className={styles.buttonsContainer}>
                <button className={styles.buttonMinus} onClick={() => decrement( 1 )}>-</button>

                <div className={styles.countLabel}>{counter}</div>

                <button className={styles.buttonAdd} onClick={() => increment( 1 )}>+</button>
            </div>
        </div>
    )
}
