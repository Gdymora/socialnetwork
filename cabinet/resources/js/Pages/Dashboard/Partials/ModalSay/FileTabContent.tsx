import Uploader from "@/Components/Uploader";
import { OnChangeFunction } from "@/types";

const FileTabContent = ({ className, onChange }: { className: string,  onChange: OnChangeFunction }) => {
    
    return (
        <div className={className}>
            <Uploader
            onChange={onChange}
                style={{
                    backgroundColor: "lightblue",
                    border: "3px solid blue",
                }}
                className="custom-uploader-class"
            />
        </div>
    );
};

export default FileTabContent;
