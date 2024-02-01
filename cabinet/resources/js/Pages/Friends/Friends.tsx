import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Auth, ProfileData } from "@/types";
import UserGaleryCard from "./UserGaleryCard";
import NavSidebar from "./NavSidebar";
interface UsePageProps {
    auth: Auth;
    randomUsersForFriendship: ProfileData[];
}
export default function Friends({
    auth,
    randomUsersForFriendship,
}: UsePageProps) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    New Page Title
                </h2>
            }
        >
            <Head title="New Page" />

            {/* Контент нової сторінки */}
            <main>
                <div className="ar-px-user-galery">
                    <NavSidebar />
                    <div className="content">
                        <div className="user-grid">
                            {randomUsersForFriendship.map((profileData) => (
                                <UserGaleryCard profileData={profileData} />
                            ))}
                            <div className="user-galery-card">
                                <a href="">
                                    <img
                                        src="assets/images/galery/pexels-photo-18843275.webp"
                                        alt="Фото або відео"
                                    />
                                    <div className="user-card-content">
                                        <a href="">
                                            {" "}
                                            <p>Anna Helton</p>{" "}
                                        </a>
                                        <p>Web design.</p>
                                    </div>
                                </a>
                                <div className="user-card-footer">
                                    <button className="like-button">
                                        Add to friends
                                    </button>
                                    <button className="comment-button">
                                        Delete
                                    </button>
                                </div>
                            </div>

                            <div className="user-galery-card">
                                <a href="">
                                    <img
                                        src="assets/images/galery/pexels-photo-18779079.webp"
                                        alt="Фото або відео"
                                    />
                                    <div className="user-card-content">
                                        <a href="">
                                            {" "}
                                            <p>Helga Borman</p>{" "}
                                        </a>
                                        <p>Web design.</p>
                                    </div>
                                </a>
                                <div className="user-card-footer">
                                    <button className="like-button">
                                        Add to friends
                                    </button>
                                    <button className="comment-button">
                                        Delete
                                    </button>
                                </div>
                            </div>

                            <div className="user-galery-card">
                                <a href="">
                                    <img
                                        src="assets/images/galery/pexels-photo-18866330.webp"
                                        alt="Фото або відео"
                                    />
                                    <div className="user-card-content">
                                        <a href="">
                                            {" "}
                                            <p>Rebeka Gald</p>{" "}
                                        </a>
                                        <p>Web design.</p>
                                    </div>
                                </a>
                                <div className="user-card-footer">
                                    <button className="like-button">
                                        Add to friends
                                    </button>
                                    <button className="comment-button">
                                        Delete
                                    </button>
                                </div>
                            </div>

                            <div className="user-galery-card">
                                <a href="">
                                    <img
                                        src="assets/images/galery/pexels-photo-18731989.jpeg"
                                        alt="Фото або відео"
                                    />
                                    <div className="user-card-content">
                                        <a href="">
                                            {" "}
                                            <p>Mary Bly</p>{" "}
                                        </a>
                                        <p>Web design.</p>
                                    </div>
                                </a>
                                <div className="user-card-footer">
                                    <button className="like-button">
                                        Add to friends
                                    </button>
                                    <button className="comment-button">
                                        Delete
                                    </button>
                                </div>
                            </div>

                            <div className="user-galery-card">
                                <a href="">
                                    <img
                                        src="assets/images/galery/pexels-photo-18666051.jpeg"
                                        alt="Фото або відео"
                                    />
                                    <div className="user-card-content">
                                        <a href="">
                                            {" "}
                                            <p>Kety Valgyr</p>{" "}
                                        </a>
                                        <p>Web design.</p>
                                    </div>
                                </a>
                                <div className="user-card-footer">
                                    <button className="like-button">
                                        Add to friends
                                    </button>
                                    <button className="comment-button">
                                        Delete
                                    </button>
                                </div>
                            </div>

                            <div className="user-galery-card">
                                <a href="">
                                    <img
                                        src="assets/images/galery/pexels-photo-18435667.jpeg"
                                        alt="Фото або відео"
                                    />
                                    <div className="user-card-content">
                                        <a href="">
                                            {" "}
                                            <p>Ango Pedrolo</p>{" "}
                                        </a>
                                        <p>Web design.</p>
                                    </div>
                                </a>
                                <div className="user-card-footer">
                                    <button className="like-button">
                                        Add to friends
                                    </button>
                                    <button className="comment-button">
                                        Delete
                                    </button>
                                </div>
                            </div>

                            <div className="user-galery-card">
                                <a href="">
                                    <img
                                        src="assets/images/galery/pexels-photo-18038136.webp"
                                        alt="Фото або відео"
                                    />
                                    <div className="user-card-content">
                                        <a href="">
                                            {" "}
                                            <p>Victoria Lagutova</p>{" "}
                                        </a>
                                        <p>Web design.</p>
                                    </div>
                                </a>
                                <div className="user-card-footer">
                                    <button className="like-button">
                                        Add to friends
                                    </button>
                                    <button className="comment-button">
                                        Delete
                                    </button>
                                </div>
                            </div>

                            <div className="user-galery-card">
                                <a href="">
                                    <img
                                        src="assets/images/galery/pexels-photo-17503411.jpeg"
                                        alt="Фото або відео"
                                    />
                                    <div className="user-card-content">
                                        <a href="">
                                            {" "}
                                            <p>Bianca Kuprina</p>{" "}
                                        </a>
                                        <p>Web design.</p>
                                    </div>
                                </a>
                                <div className="user-card-footer">
                                    <button className="like-button">
                                        Add to friends
                                    </button>
                                    <button className="comment-button">
                                        Delete
                                    </button>
                                </div>
                            </div>

                            <div className="user-galery-card">
                                <a href="">
                                    <img
                                        src="assets/images/galery/pexels-photo-11960755.jpeg"
                                        alt="Фото або відео"
                                    />
                                    <div className="user-card-content">
                                        <a href="">
                                            {" "}
                                            <p>Olga Volkova</p>{" "}
                                        </a>
                                        <p>Web design.</p>
                                    </div>
                                </a>
                                <div className="user-card-footer">
                                    <button className="like-button">
                                        Add to friends
                                    </button>
                                    <button className="comment-button">
                                        Delete
                                    </button>
                                </div>
                            </div>

                            <div className="user-galery-card">
                                <a href="">
                                    <img
                                        src="assets/images/galery/pexels-photo-11077187.jpeg"
                                        alt="Фото або відео"
                                    />
                                    <div className="user-card-content">
                                        <a href="">
                                            {" "}
                                            <p>Jeny Gorenkova</p>{" "}
                                        </a>
                                        <p>Web design.</p>
                                    </div>
                                </a>
                                <div className="user-card-footer">
                                    <button className="like-button">
                                        Add to friends
                                    </button>
                                    <button className="comment-button">
                                        Delete
                                    </button>
                                </div>
                            </div>

                            <div className="user-galery-card">
                                <a href="">
                                    <img
                                        src="assets/images/galery/pexels-photo-8908813.jpeg"
                                        alt="Фото або відео"
                                    />
                                    <div className="user-card-content">
                                        <a href="">
                                            {" "}
                                            <p>Katrin Malkovich</p>{" "}
                                        </a>
                                        <p>Web design.</p>
                                    </div>
                                </a>
                                <div className="user-card-footer">
                                    <button className="like-button">
                                        Add to friends
                                    </button>
                                    <button className="comment-button">
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </AuthenticatedLayout>
    );
}
