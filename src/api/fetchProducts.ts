import products from "../data/produtos.json";

export type Product = {
    productName: string;
    productDescription: string;
    productImg: string;
    productPrice: number;
};

// Criei essa função para converter os valores do preço
const parsePrice = (priceString: string): number => {
    return parseFloat(priceString.replace("R$", "").replace(",", ".").trim());
};

export const fetchProducts = async (): Promise<Product[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const parsedProducts: Product[] = products.map((product) => ({
                ...product,
                productPrice: parsePrice(product.productPrice),
            }));
            resolve(parsedProducts);
        }, 1000);
    });
};
