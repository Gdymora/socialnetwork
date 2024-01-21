import SidebarItem from "./SidebarItem";
import SidebarSection from "./SidebarSection";

export default function RightSidebar() {
    return (
        <>
            <SidebarSection title="Top Jobs">
                <SidebarItem
                    number="1"
                    name="Alex Petroff"
                    description="Web Developer"
                />
                <SidebarItem
                    number="2"
                    name="John Doe"
                    description="Graphic Designer"
                />
                {/* ...інші SidebarItem */}
            </SidebarSection>
            <div className="section_1">
                <div className="header centered-container">
                    <img src="assets/images/noimg.png" alt="" />
                </div>
                <div className="section centered-container">
                    <div className="">
                        <h2>Track Time on Workwise</h2>
                    </div>
                    <div>
                        <p className="text-light">
                            Pay only for the Hours worked
                        </p>
                    </div>
                    <div className="border-block-end"></div>
                    <h2>SIGN UP</h2>
                    <div className="">
                        <a href="">Learn more</a>
                    </div>
                </div>
            </div>
            <div className="section_2">
                <div className="section_2">
                    <div className="header-card">
                        <div className="space-between">
                            <h2 className="bold">Top Jobs</h2>
                            <button className="button-icon">
                                <i className="bi bi-three-dots-vertical"></i>
                            </button>
                        </div>
                    </div>
                    <div className="section centered-container">
                        <div className="border-block-end"></div>

                        <div className="item_right_sidebar_section_2">
                            <div className="">1</div>
                            <div className="text">
                                <p className="bold">Alex Petroff</p>
                                <p className="text-light">Web develodiver</p>
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

                        <div className="item_right_sidebar_section_2">
                            <div className="">2</div>
                            <div className="text">
                                <p className="bold">Alex Petroff</p>
                                <p className="text-light">Web develodiver</p>
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
                    </div>
                </div>{" "}
            </div>
        </>
    );
}
