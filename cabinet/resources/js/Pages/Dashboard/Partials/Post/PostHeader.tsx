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
                    src={ author.profile_image_url
                        ? `/user-file/${author.profile_image_url}`
                        : "assets/images/noimg.png"
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
                <button className="button-icon">
                    <i className="bi bi-three-dots-vertical"></i>
                </button>
            </div>
        </div>
    );
}
