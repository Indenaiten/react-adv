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
    maxCount: number;
}

export interface ProductCart extends Product{
    count: number;
}

export interface ProductCardHandlers{
    count: number;
    isMaxCountReached: boolean;
    maxCount?: number;
    product: Product;
    increment: ( value: number ) => void;
    decrement: ( value: number ) => void;
    reset: () => void;
}