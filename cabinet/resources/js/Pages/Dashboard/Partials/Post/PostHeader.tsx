import Dropdown from "@/Components/Dropdown";
import ModalYesOrNot from "@/Components/ModalYesOrNot";
import { Author } from "@/types";
import moment from "moment";
import { useState } from "react";

export default function PostHeader({
    id,
    author,
    createdAt,
    visibility,
    onChangeUpdate,
    onChangeDelete,
}: {
    id: number;
    author: Author;
    createdAt: string;
    visibility: string;
    onChangeUpdate: (id: number) => void | undefined;
    onChangeDelete: (id: number) => void | undefined;
}) {
    const dateString = createdAt;
    const formattedDate = moment(dateString).format("DD.MM.YYYY HH:mm:ss");
    const currentPath = window.location.pathname === "/user-home";
    const [isOpenDelete, setIsOpenDelete] = useState(false);
    const [postData, setPostData] = useState({ id, author, visibility });

    const handleClickUpdate = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        onChangeUpdate(id);
    };
    const handleClickDelete = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        setIsOpenDelete(true);
    };

    const closeDeleteModal = () => {
        setIsOpenDelete(false);
    };

    const handleDeletePost = () => {
        onChangeDelete(postData.id);
        setIsOpenDelete(false);
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
                                        method="get"
                                        as="button"
                                        href={route("posts.show", { id: id })}
                                    >
                                        View
                                    </Dropdown.Link>
                                }
                                <div
                                    className="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition duration-150 ease-in-out "
                                    onClick={(e) => {
                                        handleClickUpdate(e);
                                    }}
                                >
                                    Edit
                                </div>
                                <div
                                    className="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition duration-150 ease-in-out "
                                    onClick={(e) => {
                                        handleClickDelete(e);
                                    }}
                                >
                                    Delete
                                </div>
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
            {isOpenDelete && (
                <ModalYesOrNot
                    closeModal={closeDeleteModal}
                    handleButtonClick={handleDeletePost}
                    text={{
                        head: "Delete a post",
                        title: "Do you want to delete a post?",
                    }}
                />
            )}
        </div>
    );
}
