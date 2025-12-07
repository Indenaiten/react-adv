export interface Product{
    id: string;
    title: string;
    img?: string;
}

export interface ProductContext{
    product: Product;
    counter: number;
    increment: ( value: number ) => void;
    decrement: ( value: number ) => void;
}