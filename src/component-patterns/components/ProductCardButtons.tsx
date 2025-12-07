import { useContext } from "react";
import { context as productContext } from "./ProductCard";
import styles from '../styles/styles.module.css';

export const ProductCardButtons = () => {
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
