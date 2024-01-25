import { ChangeEvent, useEffect, useState } from "react";

interface Option {
    label: string;
    value: string | number;
}
interface SelectButtonProps {
    size?: "small" | "medium" | "large";
    style?: React.CSSProperties;
    options: Option[];
    onChange: (value: string | number) => void;
}
const generateStyle = (size: string) => {
    return {
        height: "36px",
        padding: "5px 26px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        backgroundColor: "#f8f8f8",
        cursor: "pointer",
        fontSize:
            size === "small" ? "12px" : size === "large" ? "20px" : "16px",
    };
};

const SelectButton = ({
    size = "medium",
    style,
    options,
    onChange,
}: SelectButtonProps) => {
    const baseStyle = generateStyle(size);
    const combinedStyle = { ...baseStyle, ...style };
    const [selected, setSelected] = useState<number | string>(
        options.length > 0 ? options[0].value : ""
    );

    useEffect(() => {
        // Повідомити батьківський компонент про початкове значення
        if (options.length > 0) {
            onChange(options[0].value);
        }
    }, []); // Пустий масив залежностей, щоб виконати тільки при монтуванні

    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = e.target.value;
        setSelected(selectedValue); // Оновлення локального стану
        onChange(selectedValue); // Використання оновленого значення в колбеку
    };
    return (
        <select style={combinedStyle} onChange={handleSelectChange}>
            {options.map((option: Option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default SelectButton;
