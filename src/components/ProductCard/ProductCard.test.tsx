import { render, screen } from "@testing-library/react";
import ProductCard from "./index";
import "@testing-library/jest-dom";
import { Product } from "../../api/fetchProducts";

const mockProduct: Product = {
    productName: "Produto Teste",
    productDescription: "Descrição do produto",
    productImg: "https://via.placeholder.com/150",
    productPrice: 99.99,
};

test("Renderizar corretamente o componente ProductCard na tela", () => {
    render(<ProductCard product={mockProduct} />);

    expect(screen.getByText(/Produto Teste/i)).toBeInTheDocument();
    expect(screen.getByText(/Descrição do produto/i)).toBeInTheDocument();
    expect(screen.getByText(/R\$ 99.99/i)).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute("src", mockProduct.productImg);
});
