import Uploader from "@/Components/Uploader";
import { OnChangeFunction } from "@/types";

const FileTabContent = ({
    className,
    onChange,
}: {
    className: string;
    onChange: OnChangeFunction;
}) => {
    return (
        <div className={className}>
            <Uploader
                onChange={onChange}
                style={{}}
                className="custom-uploader-class"
            />
        </div>
    );
};

export default FileTabContent;
