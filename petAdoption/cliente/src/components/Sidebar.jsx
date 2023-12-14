const Sidebar = () => {
    return (
        <div className="sidebar">
            <nav className="nav">
                <ul className="nav__navbar">
                    <li className="nav__item">
                        <a className="nav__link" href="#">
                            <i className="fa-solid fa-house nav__icon"></i>
                            <span className="nav__title">Home</span>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a className="nav__link" href="#">
                            <i className="fa-solid fa-compass nav__icon"></i>
                            <span className="nav__title">Explora</span>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a className="nav__link" href="#">
                            <i className="fa-solid fa-square-plus nav__icon"></i>
                            <span className="nav__title">Publicar</span>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a className="nav__link" href="#">
                            <i className="fa-solid fa-heart nav__icon"></i>
                            <span className="nav__title">Mis Favoritos</span>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a className="nav__link" href="#">
                            <i className="fa-solid fa-user-group nav__icon"></i>
                            <span className="nav__title">Adoptantes</span>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a className="nav__link" href="#">
                            <i className="fa-solid fa-bullhorn nav__icon"></i>
                            <span className="nav__title">Mis Publicaciones</span>
                        </a>
                    </li>
                </ul>

                <ul className="nav__navbar">
                    <li className="nav__item">
                        <a className="nav__link" href="#">
                            <i className="fa-solid fa-user nav__icon"></i>
                            <span className="nav__title">Mi Perfil</span>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a className="nav__link" href="#">
                            <i className="fa-solid fa-circle-question nav__icon"></i>
                            <span className="nav__title">Contacto</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;