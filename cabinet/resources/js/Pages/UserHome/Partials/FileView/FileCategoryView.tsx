import { UserFile } from "@/types";
import FileView from "./FileView";
import { CSSProperties, useEffect, useState } from "react";
import ModalCustom from "@/Components/ModalCustom";
import { toast } from "react-toastify";
import useAxios from "@/Hooks/useAxios";

function FileCategoryView({
    title,
    files,
    onFileClick,
}: {
    title?: string;
    files: UserFile[];
    onFileClick: (file: UserFile, index: number) => void;
}) {
    const contentGrid: CSSProperties = {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(145px, 1fr))",
        margin: "10px",
        justifyItems: "center",
    };

    const [selectedItems, setSelectedItems] = useState<File[]>([]);
    const [isOpenList, setIsOpenList] = useState(false);

    const {
        sendRequest: sendRequestDelete,
        data: dataDelete,
        loading: loadingDelete,
        error: errorDelete,
    } = useAxios();

    useEffect(() => {
        if (dataDelete) {
            toast.success("Successfully deleted");
        /*     const updatedFiles = files.filter(
                (file) => !fileIdDelete.includes(file.id)
            );
            setFiles(updatedFiles); */
            setSelectedItems([]);
        }
    }, [dataDelete]);

    useEffect(() => {
        const errorNow = errorDelete;
        if (errorNow) {
            toast.error("Error:", errorNow.message);
        }
    }, [errorDelete]);
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        item: File
    ) => {
        const isChecked = e.target.checked;
        if (isChecked) {
            setSelectedItems((prev) => [...prev, item]);
        } else {
            setSelectedItems((prev) => prev.filter((i) => i.id !== item.id));
        }
    };

    const openModalCreateList = () => {
        // Логіка для відкриття модального вікна створення списку
    };

    const openModalAddList = () => {
        // Логіка для відкриття модального вікна додавання списку
    }; 
    const openModalList = () => setIsOpenList(true);
    const closeModalList = () => setIsOpenList(false);

    const openDeleteModalArray = () => {
        const arrayID = selectedItems.map((item) => item.id); 
        deleteFile(arrayID);
        closeModalList();
      };

    const deleteFile = (ids: number[]) => {
        if (ids) {
            const url = `/delete-user-files`;
            sendRequestDelete("post", { ids }, {}, url);
        }
    };

    return (
        <div className="post">
            {title && <h3>{title}</h3>}
            <div style={contentGrid}>
                {files.map((file, index) => (
                    <FileView
                        key={file.id}
                        file={file}
                        onFileClick={() => onFileClick(file, index)}
                        handleChange={handleChange}
                        selectedItems={selectedItems}
                    />
                ))}
                <button onClick={openModalList}>TEST</button>
                {isOpenList && (
                    <ModalCustom
                        isOpen={isOpenList}
                        closeModal={closeModalList}
                        text={"Your Modal Title"}
                        zIndex={10}
                    >
                        <div>
                            <h2>List items:</h2>
                            <ul>
                                {selectedItems.map((item, index) => (
                                    <li key={index}>
                                        {index + 1} {item.title}
                                        <input
                                            type="checkbox"
                                            onChange={(e) =>
                                                handleChange(e, item)
                                            }
                                            checked={selectedItems.some(
                                                (i) => i.id === item.id
                                            )}
                                        />
                                    </li>
                                ))}
                            </ul>
                            <button
                                type="button"
                                className="m-2"
                                onClick={openModalCreateList}
                            >
                                Create New List
                            </button>
                            <button
                                type="button"
                                className="m-2"
                                onClick={openModalAddList}
                            >
                                Add list
                            </button>
                            <button
                                type="button"
                                className="m-2"
                                onClick={openDeleteModalArray}
                            >
                                Delete
                            </button>
                        </div>
                    </ModalCustom>
                )}
            </div>
        </div>
    );
}

export default FileCategoryView;
