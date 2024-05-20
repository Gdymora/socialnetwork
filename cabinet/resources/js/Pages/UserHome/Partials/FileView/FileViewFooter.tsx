import { useExpandableContent } from "@/Hooks/useExpandableContent";

interface FileViewFooterProps {
    onToggleComments: () => void;
    description: string;
    title: string;
    // Ви можете додати інші пропси, якщо потрібно
}
export default function FileViewFooter({
    onToggleComments,
    description,
    title,
}: FileViewFooterProps) {
    if (typeof onToggleComments !== "function") {
        console.error(
            "onToggleComments should be a function",
            onToggleComments
        );
    }
    const maxLength = 10; // Встановіть максимальну довжину тексту
    const text = title ? title : "";
    const { isExpanded, toggleExpanded, renderContent } = useExpandableContent(
        text,
        maxLength
    );

    return (
        <div className="flex">
            <span className="bold  justify-end" style={{ fontSize: "0.7rem" }}>
                <p>
                    {renderContent()}
                    {text.length > maxLength && (
                        <button onClick={toggleExpanded}>
                            {isExpanded ? "<-" : "..."}
                        </button>
                    )}
                </p>
            </span>
            {/*  <span className="bold" style={{ fontSize: "0.7rem" }}>
                <p>{renderContent()}
                {text.length > maxLength && (
                    <button onClick={toggleExpanded}>
                        {isExpanded ? "<-" : "..."}
                    </button>
                )}</p>
            </span> */}
        </div>
    );
}
