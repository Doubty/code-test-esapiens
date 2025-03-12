type Props = {
    onFilter: (range: string) => void;
};

const PriceFilter = ({ onFilter }: Props) => {
    return (
        <select className="border p-2 rounded-md" onChange={(e) => onFilter(e.target.value)}>
            <option value="all">Todos</option>
            <option value="below50">Abaixo de R$50</option>
            <option value="between50-100">Entre R$50 e R$100</option>
            <option value="above100">Acima de R$100</option>
        </select>
    );
};

export default PriceFilter;
