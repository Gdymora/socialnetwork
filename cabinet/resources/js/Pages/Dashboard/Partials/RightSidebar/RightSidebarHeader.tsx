export default function RightSidebarHeader({ title }) {
    return (
        <div className="header-card">
            <div className="space-between">
                <h2 className="bold">{title}</h2>
                <button className="button-icon">
                    <i className="bi bi-three-dots-vertical"></i>
                </button>
            </div>
        </div>
    );
}
