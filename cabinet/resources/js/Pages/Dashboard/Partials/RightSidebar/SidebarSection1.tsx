import RightSidebarHeader from "./RightSidebarHeader";

export default function SidebarSection1({ title }: { title: string }) {
    return (
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
    );
}
