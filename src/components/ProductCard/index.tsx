import { Product } from "../../api/fetchProducts";

type Props = {
    product: Product;
};

const ProductCard = ({ product }: Props) => {
    return (
        <div className="border p-4 pb-10 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105 hover:shadow-lg hover:border-green-500 hover:cursor-pointer">
            <img
                src={product.productImg}
                alt={product.productName}
                className="w-full h-32 object-cover rounded"
            />
            <h2 data-testid="product-name" className="text-lg font-semibold mt-2">{product.productName}</h2>
            <p className="text-gray-600">{product.productDescription}</p>
            <p className="text-green-600 font-bold mt-2">R$ {product.productPrice}</p>
        </div>
    );
};

export default ProductCard;
