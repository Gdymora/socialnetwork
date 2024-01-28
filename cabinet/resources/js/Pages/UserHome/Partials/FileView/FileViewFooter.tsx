interface FileViewFooterProps {
    onToggleComments: () => void;
    // Ви можете додати інші пропси, якщо потрібно
}
export default function FileViewFooter({ onToggleComments }: FileViewFooterProps) {
    if (typeof onToggleComments !== "function") {
        console.error("onToggleComments should be a function", onToggleComments);
    }
    return (
        <div className="post-footer">
            
        </div>
    );
}
