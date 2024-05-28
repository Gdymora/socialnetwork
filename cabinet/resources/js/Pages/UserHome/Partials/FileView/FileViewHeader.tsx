import moment from "moment";
import Dropdown from "@/Components/Dropdown";
import { CSSProperties, useEffect, useState } from "react";
import axios from "axios";
import { UserFile } from "@/types";
import ModalYesOrNot from "@/Components/ModalYesOrNot";
import useAxios from "@/Hooks/useAxios";
import { toast } from "react-toastify";

export default function FileViewHeader({ file }: { file: UserFile }) {
    const dateString = file.created_at;
    const formattedDate = moment(dateString).format("DD.MM.YYYY HH:mm:ss");
    const filePostHeader: CSSProperties = {
        margin: "5px",
    };

    const [isOpenDelete, setIsOpenDelete] = useState(false);
    const [fileIdDelete, setFileIdDelete] = useState<number | null>(null);
    const {
        sendRequest: sendRequestDelete,
        data: dataDelete,
        error: errorDelete,
    } = useAxios();

    useEffect(() => {
        if (dataDelete) {
            toast.success("Successfully deleted");
        }
    }, [dataDelete]);

    useEffect(() => {
        const errorNow = errorDelete;
        if (errorNow) {
            toast.error("Error:", (errorNow as any).message);
        }
    }, [errorDelete]);

    const handleSetAsProfilePicture = () => {
        // event.preventDefault();
        axios
            .patch("/user-about-me", { profile_image_url: file.url })
            .then((response) => {
                // Обробка успішної відповіді
                console.log(response.data);
            })
            .catch((error) => {
                // Обробка помилки
                console.error("Error:", error);
            });
    };
    const openDeleteModal = (Id: number) => {
        setIsOpenDelete(true);
        setFileIdDelete(Id);
    };
    const closeDeleteModal = () => {
        setIsOpenDelete(false);
    };

    const handleDeleteFile = () => {
        if (fileIdDelete) {
            deleteFile(fileIdDelete);
        }
        setIsOpenDelete(false);
    };

    const deleteFile = (id: number) =>
        sendRequestDelete("delete", {}, { url: `/user-file/${id}` });

    return (
        <div className="flex-grow" style={filePostHeader}>
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
                        <button
                            type="button"
                            className="m-2"
                            onClick={() => openDeleteModal(file.id)}
                        >
                            Delete
                        </button>
                        <Dropdown.Link
                            href={
                                // @ts-expect-error
                                route("profile.edit")
                            }
                        >
                            Profile
                        </Dropdown.Link>{" "}
                        {file.type === "image" && (
                            <Dropdown.Link
                                onClick={handleSetAsProfilePicture}
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
            {isOpenDelete && (
                <ModalYesOrNot
                    closeModal={closeDeleteModal}
                    handleButtonClick={handleDeleteFile}
                    text={{
                        head: "Delete a file",
                        title: "Do you want to delete a file?",
                    }}
                />
            )}
        </div>
    );
}
