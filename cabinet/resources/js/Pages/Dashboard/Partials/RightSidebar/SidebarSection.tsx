import RightSidebarHeader from "./RightSidebarHeader"; 

export default function ({ title, children }) {
    return (
        <div className="section_2">
            <RightSidebarHeader title={title} />
            <div className="section centered-container">
                <div className="border-block-end"></div>
                {children}
            </div>
        </div>
    );
}
