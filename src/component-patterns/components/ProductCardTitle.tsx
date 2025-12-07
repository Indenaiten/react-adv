import { useContext } from "react";
import { context as productContext } from "./ProductCard";
import styles from '../styles/styles.module.css';

export const ProductCardTitle = ({ title = null }: { title?: string | null }) => {
    const { product } = useContext( productContext );
    const productTitle: string = !title ? product.title || 'Test Title' : title;

    return (
        <>
            <span className={styles.productDescription}>{ productTitle }</span>
        </>
    )
}
