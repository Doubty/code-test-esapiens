type Props = {
    onSearch: (query: string) => void;
};

const SearchBar = ({ onSearch }: Props) => {
    return (
        <input
            type="text"
            placeholder="Buscar produto..."
            className="border p-2 w-full rounded-md "
            onChange={(e) => onSearch(e.target.value)}
        />
    );
};

export default SearchBar;
