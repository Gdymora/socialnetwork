import Uploader from "@/Components/Uploader";
import { OnChangeFunction } from "@/types";

const FileTabContent = ({
    className,
    onChange,
    page,
}: {
    className: string;
    onChange: OnChangeFunction;
    page?: string;
}) => {
    return (
        <div className={className}>
            <Uploader
                onChange={onChange}
                page={page}
                style={{}}
                className="custom-uploader-class"
            />
        </div>
    );
};

export default FileTabContent;
