import SidebarItem from "./SidebarItem";
import SidebarSection1 from "./SidebarSection1";
import SidebarSection3 from "./SidebarSection3";
import SidebarSection2 from "./SidebarSection2";
import { postMostViewed } from "@/types";
import { title } from "process";

export default function RightSidebar({
    postMostViewed,
}: {
    postMostViewed: postMostViewed[];
}) {
    const renderContent = (content: string, maxLength = 50) => {
        return content.substring(0, maxLength) + "...";
    };
    return (
        <>
            <SidebarSection1 title="Top Jobs" />

            <SidebarSection2 title="Top Jobs">
                <SidebarItem
                    number={1}
                    name="Alex Petroff"
                    description="Web Developer"
                />
                <SidebarItem
                    number={2}
                    name="John Doe"
                    description="Graphic Designer"
                />
            </SidebarSection2>

            <SidebarSection3 title="Most Viewed This Week">
                {postMostViewed.map((post) => (
                    <SidebarItem
                        key={post.id}
                        number={post.viewed}
                        name={post.title}
                        description={renderContent(post.content, 50)}
                    />
                ))}
            </SidebarSection3>
        </>
    );
}
