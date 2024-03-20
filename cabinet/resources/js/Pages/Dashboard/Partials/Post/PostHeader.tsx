import Dropdown from "@/Components/Dropdown";
import { Author } from "@/types";
import moment from "moment";

export default function PostHeader({
    author,
    createdAt,
    visibility,
}: {
    author: Author;
    createdAt: string;
    visibility: string;
}) {
    const dateString = createdAt;
    const formattedDate = moment(dateString).format("DD.MM.YYYY HH:mm:ss");

    return (
        <div className="post-header">
            <div className="circle">
                <img
                    src={
                        author.profile_image_url
                            ? `/user-file/${author.profile_image_url}`
                            : "/assets/images/noimg.png"
                    }
                    alt={`image ${author.name}`}
                    loading="lazy"
                />
            </div>
            <div className="text">
                <p className="bold">
                    {author.name} {author.last_name}
                </p>
                <p className="text-light">
                    {formattedDate} {visibility}
                </p>
            </div>
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

                    <Dropdown.Content align={"right"}>
                        <Dropdown.Link href={route("profile.edit")}>
                            View
                        </Dropdown.Link>{" "}
                        <Dropdown.Link href={route("profile.edit")}>
                            Edit
                        </Dropdown.Link>{" "}
                        <Dropdown.Link href={route("profile.edit")}>
                            Delete
                        </Dropdown.Link>{" "}
                        {/*  <Dropdown.Link href={route("profile.edit")}>
                            Profile
                        </Dropdown.Link>{" "} */}
                        {/*  {type === "image" && (
                            <Dropdown.Link
                                onClick={handleSetAsProfilePicture}
                                method="post"
                                as="button"
                                href="#"
                            >
                                {" "}
                                Set as profile picture
                            </Dropdown.Link>
                        )} */}
                    </Dropdown.Content>
                </Dropdown>
            </div>
        </div>
    );
}
