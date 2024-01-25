import { OnChangeFunction } from "@/types";
import {
    ChangeEvent,
    FocusEvent,
    FocusEventHandler,
    MouseEvent,
    MouseEventHandler,
    useState,
} from "react";

const divStyle = {
    cursor: "text",
    padding: "5px",
    border: "1px solid transparent",
    minWidth: "100px", // Мінімальна ширина для тестування
    minHeight: "20px", // Мінімальна висота для тестування
};

const textArea = {
    /* Стилізація */
    cursor: "text",
    padding: "10px",
    border: "1px solid transparent",
    borderRadius: "5px", // Замінено 'border-radius' на 'borderRadius'
    fontSize: "16px",
    boxSizing: "border-box" as const,
    width: "100%",
    /* resize: "vertical", */
    /* Налаштування переносу */
    whiteSpace: "pre-wrap" as const, // Зберігає пробіли і переноси
    overflowWrap: "break-word" as const, // Перенос слів, щоб уникнути виходу за межі
};

const textAreaNone = {
    border: "none" /* Прибирає рамку */,
    overflow: "auto" /* Управління прокруткою */,
    resize: "none" as const /* Відключає можливість зміни розмірів */,
    outline: "none" /* Прибирає фокусний контур */,
};
const combinedStyles = {
    ...textArea,
    ...textAreaNone,
};

const EditableText = ({ onChange }: { onChange: (value: string) => void; }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [text, setText] = useState("");
    const [isTextEntered, setIsTextEntered] = useState(false);

    const handleTextClick = (event: MouseEvent<HTMLDivElement>) => {
        setIsEditing(true);
        if (!isTextEntered) {
            setText("");
        }
    };

    const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newText = e.target.value;
        setText(e.target.value);
        setIsTextEntered(true);
        onChange(newText);
    };

    const handleInputBlur = (event: FocusEvent<HTMLTextAreaElement>) => {
        setIsEditing(false);
        if (text === "") {
            setIsTextEntered(false);
        }
    };

    return (
        <div
            aria-label="Введіть текст"
            onClick={handleTextClick}
            style={divStyle}
        >
            {isEditing ? (
                <textarea
                    placeholder="Введіть ваш текст тут..."
                    rows={4}
                    wrap="soft"
                    style={combinedStyles}
                    value={text}
                    onChange={handleInputChange}
                    onBlur={() => handleInputBlur}
                    autoFocus
                ></textarea>
            ) : (
                <p>
                    <span data-item-text>
                        {isTextEntered ? text : "Введіть текст"}
                    </span>
                </p>
            )}
        </div>
    );
};

export default EditableText;
