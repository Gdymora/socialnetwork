import moment from "moment";
import Dropdown from "@/Components/Dropdown";
import { CSSProperties, MouseEvent } from "react";
import { useExpandableContent } from "@/Hooks/useExpandableContent";
import axios from "axios";
export default function FileViewHeader({
    title,
    createdAt,
    visibility,
    type,
    url,
}: {
    title: string;
    createdAt: string;
    visibility: string;
    type: string;
    url: string;
}) {
    const dateString = createdAt;
    const formattedDate = moment(dateString).format("DD.MM.YYYY HH:mm:ss");
    const filePostHeader: CSSProperties = {
        display: "grid",
        gridTemplateColumns: "8fr 1fr",
        margin: "10px",
        alignContent: "center",
    };

    const maxLength = 10; // Встановіть максимальну довжину тексту
    const text = title ? title : "";
    const { isExpanded, toggleExpanded, renderContent } = useExpandableContent(
        text,
        maxLength
    );

    const handleSetAsProfilePicture = (event: MouseEvent<HTMLDivElement>):any => {
        event.preventDefault();
        axios
            .patch("/user-about-me", { profile_image_url: url })
            .then((response) => {
                // Обробка успішної відповіді
                console.log(response.data);
            })
            .catch((error) => {
                // Обробка помилки
                console.error("Error:", error);
            });
    };

    return (
        <div className="" style={filePostHeader}>
            <span className="bold" style={{ fontSize: "0.7rem" }}>
                <p>
                    {renderContent()}
                    {text.length > maxLength && (
                        <button onClick={toggleExpanded}>
                            {isExpanded ? "<-" : "..."}
                        </button>
                    )}
                </p>
            </span>
            <div className="flex justify-content-right">
                <Dropdown>
                    <Dropdown.Trigger>
                        <button
                            className="nav-link dropdown-toggle button-icon"
                            id="navbarDropdown"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            <i className="bi bi-three-dots-vertical"></i>
                        </button>
                    </Dropdown.Trigger>

                    <Dropdown.Content>
                        <Dropdown.Link href={
                            route("profile.edit")
                            }>
                            Profile
                        </Dropdown.Link>{" "}
                        {visibility === "private" && type === "image" && (
                            <Dropdown.Link
                                onClick={handleSetAsProfilePicture as any}
                                method="post"
                                as="button"
                                href="#"
                            >
                                {" "}
                                Set as profile picture
                            </Dropdown.Link>
                        )}
                    </Dropdown.Content>
                </Dropdown>
            </div>
        </div>
    );
}
