import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Auth } from '@/types'; 
interface UsePageProps {
    auth: Auth; 
}
// Припускаємо, що NewPageProps визначено десь в іншому місці
export default function Galery({ auth }: UsePageProps) {
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
            <div className="ar-px-galery">
        <nav className="ar-px-galery-menu">
          <ul>
            <li>
              <a href="#">
                <i className="nav-icon bi bi-house-door-fill"></i>
                <span className="nav-text">Gallery</span>
              </a>
            </li> 
            

  {/*        <ul className="logout">
            <li>
              <a href="#">
                <i className="nav-icon bi bi-chat-square-text-fill"></i>
                <span className="nav-text">Settings</span>
              </a>
            </li>

            <li>
              <a href="#">
                <i className="nav-icon bi bi-chat-square-text-fill"></i>
                <span className="nav-text"> Logout </span>
              </a>
            </li>*/}
          </ul>   
        </nav>

        <div className="content">
          <div className="gallery-grid">
            <div className="gallery-card">
              <div className="header">
                <div className="circle">
                  <img src="/assets/images/noimg.png" alt="" />
                </div>
                <div className="text">
                  <p className="bold">Alex Petroff</p>
                  <p className="text-light">5 october о 14:58 public</p>
                </div>
                <div className="flex justify-content-right">
                  <button className="button-icon">
                    <i className="bi bi-three-dots-vertical"></i>
                  </button>
                </div>
              </div>
              <div className="media">
                <img src="assets/images/galery/colob.png" alt="Фото або відео" />
              </div>
              <div className="description">
                <p>
                  <span className="hashtag">sun</span> <span className="hashtag">nature</span>
                  <span className="hashtag">summer</span>
                </p>
              </div>
              <div className="footer">
                <button className="like-button">Like</button>
                <button className="comment-button">Comment</button>
              </div>
            </div>

            <div className="gallery-card">
              <div className="header">
                <div className="circle">
                  <img src="/assets/images/noimg.png" alt="" />
                </div>
                <div className="text">
                  <p className="bold">Alex Petroff</p>
                  <p className="text-light">5 october о 14:58 public</p>
                </div>
                <div className="flex justify-content-right">
                  <button className="button-icon">
                    <i className="bi bi-three-dots-vertical"></i>
                  </button>
                </div>
              </div>
              <div className="media">
                <img src="assets/images/galery/clever.png" alt="Фото або відео" />
              </div>
              <div className="description">
                <p>
                  <span className="hashtag">sun</span> <span className="hashtag">nature</span>
                  <span className="hashtag">summer</span>
                </p>
              </div>
              <div className="footer">
                <button className="like-button">Like</button>
                <button className="comment-button">Comment</button>
              </div>
            </div>

            <div className="gallery-card">
              <div className="header">
                <div className="circle">
                  <img src="/assets/images/noimg.png" alt="" />
                </div>
                <div className="text">
                  <p className="bold">Alex Petroff</p>
                  <p className="text-light">5 october о 14:58 public</p>
                </div>
                <div className="flex justify-content-right">
                  <button className="button-icon">
                    <i className="bi bi-three-dots-vertical"></i>
                  </button>
                </div>
              </div>
              <div className="media">
                <img src="assets/images/galery/dino.png" alt="Фото або відео" />
              </div>
              <div className="description">
                <p>
                  <span className="hashtag">sun</span> <span className="hashtag">nature</span>
                  <span className="hashtag">summer</span>
                </p>
              </div>
              <div className="footer">
                <button className="like-button">Like</button>
                <button className="comment-button">Comment</button>
              </div>
            </div>

            <div className="gallery-card">
              <div className="header">
                <div className="circle">
                  <img src="/assets/images/noimg.png" alt="" />
                </div>
                <div className="text">
                  <p className="bold">Alex Petroff</p>
                  <p className="text-light">5 october о 14:58 public</p>
                </div>
                <div className="flex justify-content-right">
                  <button className="button-icon">
                    <i className="bi bi-three-dots-vertical"></i>
                  </button>
                </div>
              </div>
              <div className="media">
                <img src="assets/images/galery/ledy.png" alt="Фото або відео" />
              </div>
              <div className="description">
                <p>
                  <span className="hashtag">sun</span> <span className="hashtag">nature</span>
                  <span className="hashtag">summer</span>
                </p>
              </div>
              <div className="footer">
                <button className="like-button">Like</button>
                <button className="comment-button">Comment</button>
              </div>
            </div>

            <div className="gallery-card">
              <div className="header">
                <div className="circle">
                  <img src="/assets/images/noimg.png" alt="" />
                </div>
                <div className="text">
                  <p className="bold">Alex Petroff</p>
                  <p className="text-light">5 october о 14:58 public</p>
                </div>
                <div className="flex justify-content-right">
                  <button className="button-icon">
                    <i className="bi bi-three-dots-vertical"></i>
                  </button>
                </div>
              </div>
              <div className="media">
                <img src="assets/images/galery/ten.png" alt="Фото або відео" />
              </div>
              <div className="description">
                <p>
                  <span className="hashtag">sun</span> <span className="hashtag">nature</span>
                  <span className="hashtag">summer</span>
                </p>
              </div>
              <div className="footer">
                <button className="like-button">Like</button>
                <button className="comment-button">Comment</button>
              </div>
            </div>

            <div className="gallery-card">
              <div className="header">
                <div className="circle">
                  <img src="/assets/images/noimg.png" alt="" />
                </div>
                <div className="text">
                  <p className="bold">Alex Petroff</p>
                  <p className="text-light">5 october о 14:58 public</p>
                </div>
                <div className="flex justify-content-right">
                  <button className="button-icon">
                    <i className="bi bi-three-dots-vertical"></i>
                  </button>
                </div>
              </div>
              <div className="media">
                <img src="assets/images/galery/valy.png" alt="Фото або відео" />
              </div>
              <div className="description">
                <p>
                  <span className="hashtag">sun</span> <span className="hashtag">nature</span>
                  <span className="hashtag">summer</span>
                  <span className="hashtag">Piople</span>
                </p>
              </div>
              <div className="footer">
                <button className="like-button">Like</button>
                <button className="comment-button">Comment</button>
              </div>
            </div>

          </div>
        </div>
      </div>
            </main>
        </AuthenticatedLayout>
    );
}
