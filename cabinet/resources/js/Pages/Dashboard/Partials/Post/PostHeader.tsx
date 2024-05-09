import Dropdown from "@/Components/Dropdown";
import { Author } from "@/types";
import moment from "moment";

export default function PostHeader({
    id,
    author,
    createdAt,
    visibility,
    onChangeUpdate,
}: {
    id: number;
    author: Author;
    createdAt: string;
    visibility: string;
    onChangeUpdate: (id: number) => void | undefined;
}) {
    const dateString = createdAt;
    const formattedDate = moment(dateString).format("DD.MM.YYYY HH:mm:ss");
    const currentPath = window.location.pathname === "/user-home";

    const handleClick = ( 
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        console.log(id)
        onChangeUpdate(id);
    };
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
                        {currentPath && (
                            <>
                                {
                                    <Dropdown.Link
                                        href={route("post.show", { id: id })}
                                    >
                                        View
                                    </Dropdown.Link>
                                }
                                <div
                                    className="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition duration-150 ease-in-out "
                                    onClick={handleClick as any}
                                >
                                    Edit
                                </div>{" "}
                                <Dropdown.Link
                                    /*   method="delete"
                                    as="button" */
                                    /* href={route("posts.destroy", { id: id })} */
                                    href="#"
                                >
                                    Delete
                                </Dropdown.Link>{" "}
                            </>
                        )}
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
