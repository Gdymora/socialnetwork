import Uploader from "@/Components/Uploader";
import { OnChangeFunction } from "@/types";

const FileTabContent = ({
    className,
    onChange,
    page,
    prewiewForUpdate,
}: {
    className: string;
    onChange: OnChangeFunction;
    page?: string;
    prewiewForUpdate?: { url: string; type: string } | null;
}) => {
    return (
        <div className={className}>
            <Uploader
                onChange={onChange}
                page={page}
                prewiewForUpdate={prewiewForUpdate}
                style={{}}
                className="custom-uploader-class"
            />
        </div>
    );
};

export default FileTabContent;
