import { useEffect, useState } from "react";
import { fetchProducts, Product } from "../../api/fetchProducts";
import ProductCard from "../ProductCard";

type Props = {
    searchQuery: string;
    priceFilter: string;
};

const ProductList = ({ searchQuery, priceFilter }: Props) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);


    useEffect(() => {
        const loadProducts = async () => {
            setLoading(true);
            const allProducts = await fetchProducts();
            setProducts(allProducts);
            setPage(1);
            setDisplayedProducts(allProducts.slice(0, 10));
            setHasMore(allProducts.length > 10);
            setLoading(false);
        };

        loadProducts();
    }, []);


    useEffect(() => {
        let filteredProducts = products;

        if (searchQuery) {
            filteredProducts = filteredProducts.filter((product) =>
                product.productName.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        filteredProducts = filteredProducts.filter((product) => {
            if (priceFilter === "below50") return product.productPrice < 50;
            if (priceFilter === "between50-100") return product.productPrice >= 50 && product.productPrice <= 100;
            if (priceFilter === "above100") return product.productPrice > 100;
            return true;
        });


        setDisplayedProducts(filteredProducts.slice(0, 10));
        setPage(1);
        setHasMore(filteredProducts.length > 10);
    }, [searchQuery, priceFilter, products]);


    useEffect(() => {
        if (page === 1) return;

        const loadMore = () => {
            setLoading(true);
            setTimeout(() => {
                const filteredProducts = products.filter((product) => {
                    if (searchQuery && !product.productName.toLowerCase().includes(searchQuery.toLowerCase())) {
                        return false;
                    }
                    if (priceFilter === "below50" && product.productPrice >= 50) return false;
                    if (priceFilter === "between50-100" && (product.productPrice < 50 || product.productPrice > 100)) return false;
                    if (priceFilter === "above100" && product.productPrice <= 100) return false;
                    return true;
                });

                const newProducts = filteredProducts.slice(0, page * 10);
                setDisplayedProducts(newProducts);
                setHasMore(newProducts.length < filteredProducts.length);
                setLoading(false);
            }, 1000);
        };

        loadMore();
    }, [page]);


    useEffect(() => {
        const handleScroll = () => {
            if (
                window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 &&
                !loading &&
                hasMore
            ) {
                setPage((prev) => prev + 1);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [loading, hasMore]);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {displayedProducts.map((product, index) => (
                <ProductCard key={index} product={product} />
            ))}
            {loading && <p className="text-center mt-2 font-bold text-2xl">Carregando...</p>}
            {!loading && displayedProducts.length === 0 && <p className="text-center">Nenhum produto encontrado.</p>}
            {!hasMore && <p className="text-center text-gray-500 mt-4 text-2xl">Não há mais produtos para carregar!</p>}
        </div>
    );
};

export default ProductList;
