import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";

export default function Header() {
    return (
        <header className="ar-header">
            <div className="container">
                <h1>Art-Pixel</h1>
                <div className="col-md-3 mx-auto">
                    <div className="input-group search">
                        <input
                            className="form-control border"
                            type="search"
                            placeholder="Search..."
                        />
                        <span className="input-group-text search">
                            <i className="bi bi-search"></i>
                        </span>
                    </div>
                </div>
                <nav className="menu">
                    <ul>
                        {/* ... інші елементи меню */}
                        <li>
                            <a href={route("dashboard")}>
                                <i className="bi bi-house-door-fill"></i>Home
                            </a>
                        </li><li>
                        <NavLink href={route('dashboard')} active={route().current('dashboard.index')}>
                        <i className="bi bi-house-door-fill"></i>Home
</NavLink>
</li>          <li>
                            <a href={route("user-home")}>
                                <i className="bi bi-person-fill"></i>Profile
                            </a>
                        </li>
                        <li>
                            <a href={route("frends")}>
                                <i className="bi bi-people-fill"></i>Frends
                            </a>
                        </li>
                        <li>
                            <a href={route("galery")}>
                                <i className="bi bi-people-fill"></i>Galery
                            </a>
                        </li>
                        <li>
                            <a href={route("message")}>
                                <i className="bi bi-chat-square-text-fill"></i>
                                Message
                            </a>
                        </li>
                        <li>
                            <a href={route("work-shop")}>
                                <i className="bi bi-hammer"></i>Workshop
                            </a>
                        </li>
                        <Dropdown>
                            <Dropdown.Trigger>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        id="navbarDropdown"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        <i className="bi bi-gear-fill"></i>{" "}
                                        Settings
                                    </a>
                                </li>
                            </Dropdown.Trigger>

                            <Dropdown.Content>
                                <Dropdown.Link href={route("profile.edit")}>
                                    Profile
                                </Dropdown.Link>
                                <Dropdown.Link
                                    href={route("logout")}
                                    method="post"
                                    as="button"
                                >
                                    Log Out
                                </Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
                        <li>
                            <button id="theme-toggle">
                                <i className="bi bi-brightness-alt-high-fill"></i>
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
            <button id="mobile-menu-button">Меню</button>
        </header>
    );
}
