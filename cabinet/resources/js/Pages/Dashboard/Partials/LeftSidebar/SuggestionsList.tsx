import { RandomUserForFriendship } from "@/types";
import { Inertia } from "@inertiajs/inertia";

export function SuggestionsList({
    randomUsersForFriendship,
}: {
    randomUsersForFriendship: RandomUserForFriendship[];
}) {
    return (
        <div className="section_2">
            <div className="header-card">
                <div className="space-between">
                    <h2 className="bold">Suggestions</h2>
                    <button className="button-icon">
                        <i className="bi bi-three-dots-vertical"></i>
                    </button>
                </div>
            </div>
            <div className="section centered-container">
                <div className="border-block-end"></div>
                {/* Map over the users array to render each user */}
                {randomUsersForFriendship.map(
                    (friend: RandomUserForFriendship) => (
                        <div
                            className="item_left_sidebar_section_2"
                            key={friend.id}
                        >
                            {" "}
                            {/* Ensure friend has a unique 'id' property */}
                            <div className="circle">
                                {/* Use a placeholder image if profile_image_url is not available */}
                                <img
                                    src={
                                        friend.profile_image_url
                                            ? `/user-file/${friend.profile_image_url}`
                                            : "/assets/images/noimg.png"
                                    }
                                    alt={`${friend.name} ${friend.last_name}`}
                                />
                            </div>
                            <div className="text">
                                <p className="bold">
                                    {friend.name} {friend.last_name}
                                </p>
                                {/* Check if aboutMe and occupations exist before rendering */}
                                {friend.about_me &&
                                    friend.about_me.occupations && (
                                        <p className="text-light">
                                            {friend.about_me.occupations}
                                        </p>
                                    )}
                            </div>
                            <div className="flex">
                                <button
                                    onClick={() =>
                                        Inertia.visit(
                                            route("profile-friend", {
                                                id: friend.id,
                                            })
                                        )
                                    }
                                    className="button-icon right-top"
                                >
                                    <i
                                        className="bi bi-plus-square"
                                        style={{ fontSize: "25px" }}
                                    ></i>
                                </button>
                            </div>
                        </div>
                    )
                )}
                <div>
                    <a href="#">View More Profiles</a>
                </div>{" "}
                {/* Updated href to "#" to prevent page reload */}
            </div>
        </div>
    );
}
