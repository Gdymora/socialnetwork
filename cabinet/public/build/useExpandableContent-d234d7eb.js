import { useState } from "react";
function useExpandableContent(initialContent, maxLength) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [content] = useState(initialContent);
  const toggleExpanded = (e) => {
    e.preventDefault();
    setIsExpanded(!isExpanded);
  };
  const renderContent = () => {
    if (content) {
      if (isExpanded || content.length <= maxLength) {
        return content;
      }
      return content.substring(0, maxLength);
    }
  };
  return { isExpanded, toggleExpanded, renderContent };
}
export {
  useExpandableContent as u
};
