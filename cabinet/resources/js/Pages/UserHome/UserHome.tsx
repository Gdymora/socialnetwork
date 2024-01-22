import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Auth } from "@/types";
interface UsePageProps {
    auth: Auth;
}
// Припускаємо, що NewPageProps визначено десь в іншому місці
export default function UserHome({ auth }: UsePageProps) {
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
                <div className="container ar-px-profile">
                    <div className="grid">
                        <div className="sidebar">
                            <div className="about">
                                <h2>About me</h2>
                                <div className="section">Add a biography</div>
                                <div className="section">Add a hobby</div>
                                <div className="section">Edit your profile</div>
                                <div className="section">Add to favorites</div>
                            </div>

                            <div className="flex space-between align-items-center fotos">
                                <h2>Fotos</h2>
                                <div className="section">
                                    <a href="">View all fotos</a>
                                </div>
                            </div>

                            <div className="frends">
                                <div className="flex space-between align-items-center">
                                    <div className="header">
                                        <h2>Friends</h2>
                                        <p>1000 friends</p>
                                    </div>
                                    <div className="right-top">
                                        <a href="">View all friends</a>
                                    </div>
                                </div>
                                <div className="section">
                                    <div className="profile-user-card">
                                        <img
                                            src="assets/images/galery/pexels-photo-18779079.webp"
                                            alt="Фото або відео"
                                        />
                                        <a href="">
                                            {" "}
                                            <p>Helga Borman</p>{" "}
                                        </a>
                                    </div>

                                    <div className="profile-user-card">
                                        <img
                                            src="assets/images/galery/pexels-photo-18843275.webp"
                                            alt="Фото або відео"
                                        />
                                        <a href="">
                                            {" "}
                                            <p>Anna Helton</p>{" "}
                                        </a>
                                    </div>

                                    <div className="profile-user-card">
                                        <img
                                            src="assets/images/galery/pexels-photo-18866330.webp"
                                            alt="Фото або відео"
                                        />
                                        <a href="">
                                            {" "}
                                            <p>Rebeka Gald</p>{" "}
                                        </a>
                                    </div>

                                    <div className="profile-user-card">
                                        <img
                                            src="assets/images/galery/pexels-photo-18731989.jpeg"
                                            alt="Фото або відео"
                                        />
                                        <a href="">
                                            {" "}
                                            <p>Mary Bly</p>{" "}
                                        </a>
                                    </div>

                                    <div className="profile-user-card">
                                        <img
                                            src="assets/images/galery/pexels-photo-18666051.jpeg"
                                            alt="Фото або відео"
                                        />
                                        <a href="">
                                            {" "}
                                            <p>Kety Valgyr</p>{" "}
                                        </a>
                                    </div>

                                    <div className="profile-user-card">
                                        <img
                                            src="assets/images/galery/pexels-photo-18570210.jpeg"
                                            alt="Фото або відео"
                                        />
                                        <a href="">
                                            {" "}
                                            <p>Ango Pedrolo</p>{" "}
                                        </a>
                                    </div>

                                    <div className="profile-user-card">
                                        <img
                                            src="assets/images/galery/pexels-photo-18435667.jpeg"
                                            alt="Фото або відео"
                                        />
                                        <a href="">
                                            {" "}
                                            <p>Agata Oldrit</p>{" "}
                                        </a>
                                    </div>

                                    <div className="profile-user-card">
                                        <img
                                            src="assets/images/galery/pexels-photo-18038136.webp"
                                            alt="Фото або відео"
                                        />
                                        <a href="">
                                            {" "}
                                            <p>Victoria Lagutova</p>{" "}
                                        </a>
                                    </div>

                                    <div className="profile-user-card">
                                        <img
                                            src="assets/images/galery/pexels-photo-17503411.jpeg"
                                            alt="Фото або відео"
                                        />
                                        <a href="">
                                            {" "}
                                            <p>Bianca Kuprina</p>{" "}
                                        </a>
                                    </div>

                                    <div className="profile-user-card">
                                        <img
                                            src="assets/images/galery/pexels-photo-11960755.jpeg"
                                            alt="Фото або відео"
                                        />
                                        <a href="">
                                            {" "}
                                            <p>Olga Volkova</p>{" "}
                                        </a>
                                    </div>

                                    <div className="profile-user-card">
                                        <img
                                            src="assets/images/galery/pexels-photo-11077187.jpeg"
                                            alt="Фото або відео"
                                        />
                                        <a href="">
                                            {" "}
                                            <p>Jeny Gorenkova</p>{" "}
                                        </a>
                                    </div>

                                    <div className="profile-user-card">
                                        <img
                                            src="assets/images/galery/pexels-photo-8908813.jpeg"
                                            alt="Фото або відео"
                                        />
                                        <a href="">
                                            {" "}
                                            <p>Katrin Malkovich</p>{" "}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="content">
                            {/*  <!--  --> */}
                            <div className="section_say">
                                <div className="circle">
                                    <img
                                        src="assets/images/galery/pexels-photo-18784917.webp"
                                        alt=""
                                    />
                                </div>
                                <div className="form flex align-items-center">
                                    <input type="text" />
                                </div>
                                <div className="flex align-items-center post_message">
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                    >
                                        Post a Job
                                    </button>
                                    <button
                                        type="button"
                                        className="but btn btn-danger"
                                    >
                                        Post a message
                                    </button>
                                </div>
                            </div>

                            <div className="profile-posts">
                                <div className="flex space-between align-items-center">
                                    <h2>Posts</h2>
                                    <div className="flex space-between align-items-center">
                                        <div className="button-tag">
                                            <i className="bi bi-sliders mr-1"></i>{" "}
                                            Filters
                                        </div>
                                        <div className="button-tag">
                                            <i className="bi bi-gear mr-1"></i>
                                            Post management
                                        </div>
                                    </div>
                                </div>
                                <div className="flex border-block-end"></div>
                                <div className="flex space-between align-items-center">
                                    <div className="flex align-items-center justify-content-center color-danger bg-danger-bottom">
                                        <i className="bi bi-list mr-1"></i>List
                                    </div>
                                    <div className="flex justify-content-center">
                                        <i className="bi bi-grid-3x3-gap mr-1"></i>
                                        Grid
                                    </div>
                                </div>
                            </div>

                            <div className="posts">
                                <div className="post">
                                    <div className="post-header">
                                        <div className="circle">
                                            <img
                                                src="assets/images/noimg.png"
                                                alt=""
                                            />
                                        </div>
                                        <div className="text">
                                            <p className="bold">Alex Petroff</p>
                                            <p className="text-light">
                                                5 october о 14:58 public
                                            </p>
                                        </div>
                                        <div className="flex justify-content-right">
                                            <button className="button-icon">
                                                <i className="bi bi-three-dots-vertical"></i>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="post-content">
                                        <p>
                                            Вміст посту тут. Lorem ipsum dolor
                                            sit amet, consectetur adipiscing
                                            elit...
                                        </p>
                                        <div className="">
                                            <a href="">View more</a>
                                        </div>
                                    </div>

                                    <div className="post-actions flex">
                                        <div className="left">
                                            <i className="bi bi-hand-thumbs-up-fill color-orange icon-30"></i>{" "}
                                            42
                                            {/* <i className="bi bi-hand-thumbs-down-fill color-orange"></i> 12 */}
                                        </div>
                                        <div className="flex justify-content-center align-items-center">
                                            <i className="bi bi-chat icon-30 mr-1"></i>{" "}
                                            12
                                        </div>
                                        <div className="right align-items-center">
                                            <i className="bi bi-reply icon-30 mr-1"></i>{" "}
                                            5
                                        </div>
                                    </div>

                                    <div className="post-footer">
                                        <div className="flex justify-content-center align-items-center">
                                            <button className="like-button mr-1">
                                                Like
                                            </button>
                                        </div>
                                        {/*    <div className="flex justify-content-center align-items-center">
                      <button className="like-button">Comment</button>
                    </div>  */}
                                        <div className="flex justify-content-center align-items-center">
                                            <button className="like-button">
                                                Share
                                            </button>
                                        </div>
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="write coment"
                                    />
                                    <div className="comments">
                                        {/*    <!-- Секція для коментарів --> */}
                                        <div className="comment">
                                            <img
                                                src="user-avatar.jpg"
                                                alt="Аватар користувача"
                                            />
                                            <div className="comment-info">
                                                <h3>Ім'я користувача</h3>
                                                <p>
                                                    Час коментаря: 24 жовтня
                                                    2023, 16:00
                                                </p>
                                            </div>
                                            <p className="comment-text"></p>
                                        </div>
                                    </div>
                                </div>

                                <div className="post">
                                    <div className="post-header">
                                        <div className="circle">
                                            <img
                                                src="assets/images/galery/pexels-photo-18784917.webp"
                                                alt=""
                                            />
                                        </div>
                                        <div className="text">
                                            <p className="bold">Alex Petroff</p>
                                            <p className="text-light">
                                                5 october о 14:58 public
                                            </p>
                                        </div>
                                        <div className="flex justify-content-right">
                                            <button className="button-icon">
                                                <i className="bi bi-three-dots-vertical"></i>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="post-content">
                                        <img
                                            src="assets/images/galery/pexels-photo-18784917.webp"
                                            alt="Фото або відео"
                                        />
                                        <p>
                                            Вміст посту тут. Lorem ipsum dolor
                                            sit amet, consectetur adipiscing
                                            elit...
                                        </p>
                                        <div className="">
                                            <a href="">View more</a>
                                        </div>
                                    </div>

                                    <div className="post-actions flex">
                                        <div className="left">
                                            <i className="bi bi-hand-thumbs-up-fill color-orange icon-30 mr-1"></i>{" "}
                                            42
                                            {/*   <i className="bi bi-hand-thumbs-down-fill color-orange"></i> 12  */}
                                        </div>
                                        <div className="flex justify-content-center align-items-center">
                                            <i className="bi bi-chat icon-30 mr-1"></i>{" "}
                                            12
                                        </div>
                                        <div className="right align-items-center">
                                            <i className="bi bi-reply icon-30 mr-1"></i>{" "}
                                            5
                                        </div>
                                    </div>

                                    <div className="post-footer">
                                        <div className="flex justify-content-center align-items-center">
                                            <button className="like-button">
                                                Like
                                            </button>
                                        </div>
                                        {/*  <div className="flex justify-content-center align-items-center">
                      <button className="like-button">Comment</button>
                    </div>  */}
                                        <div className="flex justify-content-center align-items-center">
                                            <button className="like-button">
                                                Share
                                            </button>
                                        </div>
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="write coment"
                                    />
                                    <div className="comments">
                                        {/*  <!-- Секція для коментарів --> */}
                                        <div className="comment">
                                            <img
                                                src="assets/images/galery/pexels-photo-18784917.webp"
                                                alt="Аватар користувача"
                                            />
                                            <div className="comment-info">
                                                <h3>Ім'я користувача</h3>
                                                <p>
                                                    Час коментаря: 24 жовтня
                                                    2023, 16:00
                                                </p>
                                            </div>
                                            <p className="comment-text"></p>
                                        </div>
                                    </div>
                                </div>

                                <div className="post">
                                    <div className="carousel-container">
                                        <div className="carousel-wrapper">
                                            <div className="user-card">
                                                {/*   <!-- Перша картка користувача --> */}
                                                <img
                                                    src="assets/images/galery/pexels-photo-18784917.webp"
                                                    alt="Аватар користувача 1"
                                                />
                                                <h3>Ім'я користувача 1</h3>
                                                <p>Опис користувача 1</p>
                                                <button className="add-friend-button">
                                                    Додати в друзі
                                                </button>
                                            </div>
                                            <div className="user-card">
                                                {/*   <!-- Перша картка користувача --> */}
                                                <img
                                                    src="assets/images/galery/pexels-photo-18784917.webp"
                                                    alt="Аватар користувача 1"
                                                />
                                                <h3>Ім'я користувача 1</h3>
                                                <p>Опис користувача 1</p>
                                                <button className="add-friend-button">
                                                    Додати в друзі
                                                </button>
                                            </div>
                                            <div className="user-card">
                                                {/* <!-- Перша картка користувача --> */}
                                                <img
                                                    src="assets/images/galery/pexels-photo-18784917.webp"
                                                    alt="Аватар користувача 1"
                                                />
                                                <h3>Ім'я користувача 1</h3>
                                                <p>Опис користувача 1</p>
                                                <button className="add-friend-button">
                                                    Додати в друзі
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </AuthenticatedLayout>
    );
}
