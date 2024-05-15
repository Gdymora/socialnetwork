import Uploader from "@/Components/Uploader";
import UploaderLot from "@/Components/UploaderLot";
import { OnChangeFunction } from "@/types";

const FileTabContent = ({
    className,
    onChange,
    page, 
}: {
    className: string;
    onChange: (files: FileList | null) => void;
    page?: string;
    prewiewForUpdate?: { url: string; type: string }[] | null;
}) => {
    return (
        <div className={className}>
           {/*  <Uploader
                onChange={onChange}
                page={page}
                prewiewForUpdate={prewiewForUpdate}
                style={{}}
                className="custom-uploader-class"
            /> */}
             <UploaderLot
                onChange={onChange}
                page={page} 
                style={{}}
                className="custom-uploader-class"
            />
        </div>
    );
};

export default FileTabContent;
