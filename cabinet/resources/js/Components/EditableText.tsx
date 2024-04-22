import {
    ChangeEvent,
    FocusEvent,
    MouseEvent,
    useEffect,
    useState,
} from "react";

const divStyle = {
    cursor: "text",
    padding: "5px",
    border: "1px solid transparent",
    minWidth: "100px",
    minHeight: "20px",
};

const textArea = {
    cursor: "text",
    padding: "10px",
    border: "1px solid transparent",
    borderRadius: "5px",
    fontSize: "16px",
    boxSizing: "border-box" as const,
    width: "100%",
    whiteSpace: "pre-wrap" as const, // Зберігає пробіли і переноси
    overflowWrap: "break-word" as const, // Перенос слів, щоб уникнути виходу за межі
};
const stylesInput = {
    cursor: "text",
    borderRadius: "5px",
    backgroundColor: "#e4e6eb",
    borderColor: "#e4e6eb",
    padding: "10px",
    width: "100%",
    height: "40px",
    margin: "-8px",
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
const combinedStylesInput = {
    ...stylesInput,
};
const EditableText = ({
    onChange,
    textFromUploader,
    isTypeInput = false,
    isEdit = false,
}: {
    onChange: (value: string) => void;
    textFromUploader: string;
    isTypeInput?: boolean;
    isEdit?: boolean;
}) => {
    const [isEditing, setIsEditing] = useState(isEdit);
    const [isTextEntered, setIsTextEntered] = useState(false);
    const [text, setText] = useState(textFromUploader || "");

    useEffect(() => {
        setIsEditing(true);
    }, [textFromUploader]);

    const handleTextClick = (event: MouseEvent<HTMLDivElement>) => {
        setIsEditing(true);
    };

    const handleInputChange = (
        e: ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLInputElement>
    ) => {
        const newText = e.target.value;
        setText(e.target.value);
        setIsTextEntered(true);
        onChange(newText);
    };

    const handleInputBlur = (
        event: FocusEvent<HTMLTextAreaElement> | FocusEvent<HTMLInputElement>
    ) => {
        setIsEditing(false);
        if (text === "") {
            setIsTextEntered(false);
        }
    };

    return (
        <div
            aria-label="Enter the text"
            onClick={handleTextClick}
            style={divStyle}
        >
            {isEditing ? (
                <>
                    {isTypeInput ? (
                        <input
                            placeholder="Enter your text here..."
                            style={combinedStylesInput}
                            value={text}
                            onChange={handleInputChange}
                            onBlur={handleInputBlur}
                        ></input>
                    ) : (
                        <textarea
                            placeholder="Enter your text here..."
                            wrap="soft"
                            rows={4}
                            style={combinedStyles}
                            value={text}
                            onChange={handleInputChange}
                            onBlur={() => handleInputBlur}
                        ></textarea>
                    )}
                </>
            ) : (
                <p>
                    <span data-item-text>
                        {isTextEntered ? text : "Enter the text"}
                    </span>
                </p>
            )}
        </div>
    );
};

export default EditableText;
