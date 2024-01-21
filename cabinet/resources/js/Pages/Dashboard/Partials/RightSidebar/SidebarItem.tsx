export default function SidebarItem({ number, name, description }) {
    return (
        <div className="item_right_sidebar_section_2">
            <div className="">{number}</div>
            <div className="text">
                <p className="bold">{name}</p>
                <p className="text-light">{description}</p>
            </div>
            <div className="flex">
                <button className="button-icon right-top">
                    <i
                        className="bi bi-plus-square"
                        style={{ fontSize: "25px" }}
                    ></i>
                </button>
            </div>
        </div>
    );
}
