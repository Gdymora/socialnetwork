import RightSidebarHeader from "./RightSidebarHeader";

export default function SidebarSection2({ title, children }) {
    return (
        <div className="section_2">
            <div className="section_2">
                <RightSidebarHeader title={title} />
                <div className="section centered-container">
                    <div className="border-block-end"></div>
                    {children}
                </div>
            </div>
        </div>
    );
}
