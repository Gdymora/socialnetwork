import { useState } from "react";

/**
 *  Хук для управління скороченням тексту
 */

export function useExpandableContent(
    initialContent: string | null,
    maxLength: number
) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [content] = useState(initialContent);

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    const renderContent = () => {
        if (content) {
            if (isExpanded || content.length <= maxLength) {
                return content;
            }
            return content.substring(0, maxLength) /* + "..." */;
        }
    };

    return { isExpanded, toggleExpanded, renderContent };
}
/* 
  const maxLength = 100; // Встановіть максимальну довжину тексту
  const text = author.name ? author.name : ""
  const { isExpanded, toggleExpanded, renderContent } = useExpandableContent(text, maxLength);

  return (
    <div>
      <p>{renderContent()}
      {text.length > maxLength && (
        <button onClick={toggleExpanded}>
          {isExpanded ? "Сховати" : "Показати більше"}
        </button>
      )}</p>
    </div>
  );
  */
