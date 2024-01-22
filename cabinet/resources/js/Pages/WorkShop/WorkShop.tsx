import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Auth } from "@/types";
interface UsePageProps {
    auth: Auth;
}
// Припускаємо, що NewPageProps визначено десь в іншому місці
export default function WorkShop({ auth }: UsePageProps) {
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
                <div className="container ar-px-workshop">
                    <div className="grid">
                        <div className="left-sidebar">
                            <div className="section_1">
                                <div className="header"></div>
                                <div className="section centered-container"></div>
                            </div>

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

                                    <div className="item_left_sidebar_section_2"></div>
                                    <div className="item_left_sidebar_section_2"></div>
                                    <div className="item_left_sidebar_section_2"></div>
                                    <div className="item_left_sidebar_section_2"></div>

                                    <div className="">
                                        <a href="">View Profile</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="content">
                            {/*  <!--  --> */}
                            <div className="section_say">
                                menu
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
                            {/*  <!--  --> */}

                            <div className="posts">canvas</div>
                            {/*  <!--  --> */}
                        </div>

                        <div className="right-sidebar">
                            <div className="section_1">
                                <div className="header centered-container">
                                    <img src="assets/images/noimg.png" alt="" />
                                </div>
                                <div className="section centered-container">
                                    <div className="">
                                        Track Time on Workwise
                                    </div>
                                    <div>
                                        <p className="text-light">
                                            Pay only for the Hours worked
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="section_2">
                                <div className="header-card">
                                    <div className="space-between">
                                        Top Jobs
                                        <button className="button-icon">
                                            <i className="bi bi-three-dots-vertical"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="section centered-container">
                                    <div className="border-block-end"></div>

                                    <div className="item_right_sidebar_section_2">
                                        <div className="">1</div>
                                        <div className="text">
                                            <p className="bold">Alex Petroff</p>
                                            <p className="text-light">
                                                Web develodiver
                                            </p>
                                        </div>
                                        <div className="flex">
                                            <button className="button-icon right-top">
                                                <i
                                                    className="bi bi-plus-square"
                                                    style={{ fontSize: "25px" }}
                                                ></i>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="item_right_sidebar_section_2">
                                        <div className="">2</div>
                                        <div className="text">
                                            <p className="bold">Alex Petroff</p>
                                            <p className="text-light">
                                                Web develodiver
                                            </p>
                                        </div>
                                        <div className="flex">
                                            <button className="button-icon right-top">
                                                <i
                                                    className="bi bi-plus-square"
                                                    style={{ fontSize: "25px" }}
                                                ></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="section_3">
                                <div className="header-card">
                                    <div className="space-between">
                                        <h2 className="bold">
                                            Most Viewed This Week
                                        </h2>
                                        <button className="button-icon">
                                            <i className="bi bi-three-dots-vertical"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="section centered-container">
                                    <div className="border-block-end"></div>

                                    <div className="item_right_sidebar_section_2">
                                        <div className="">1</div>
                                        <div className="text">
                                            <p className="bold">Alex Petroff</p>
                                            <p className="text-light">
                                                Web develodiver
                                            </p>
                                        </div>
                                        <div className="flex">
                                            <button className="button-icon right-top">
                                                <i
                                                    className="bi bi-plus-square"
                                                    style={{ fontSize: "25px" }}
                                                ></i>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="item_right_sidebar_section_2">
                                        <div className="">2</div>
                                        <div className="text">
                                            <p className="bold">Alex Petroff</p>
                                            <p className="text-light">
                                                Web develodiver
                                            </p>
                                        </div>
                                        <div className="flex">
                                            <button className="button-icon right-top">
                                                <i
                                                    className="bi bi-plus-square"
                                                    style={{ fontSize: "25px" }}
                                                ></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*  <!--  --> */}
                </div>
            </main>
        </AuthenticatedLayout>
    );
}
