import RightSidebarHeader from "./RightSidebarHeader";

export default function SidebarSection3({ title, children }) {
    return (
        <div className="section_3">
            <div className="section_3">
            <RightSidebarHeader title={title} />
                <div className="section centered-container">
                    <div className="border-block-end"></div>
                    {children}
                </div>
            </div>
        </div>
    );
}
