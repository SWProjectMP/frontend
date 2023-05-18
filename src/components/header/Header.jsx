import "./header.css";

const Header = () => {
  const topbar = [
    { title: "О нас", link: "#" },
    { title: "Топ проектов", link: "#" },
    { title: "Направления", link: "#" },
    { title: "Отзывы", link: "#" },
    { title: "FAQ", link: "#" },
  ];

  return (
    <div className="header wrapper">
      <div className="header__inner">
        <div className="header__logoImg">
          <img src="/logo.svg" alt="" />
        </div>
        <div className="header__topbar_links">
          {topbar.map((item, i) => {
            return (
              <a className="topbar__link" href={item.link}>
                <p>{item.title}</p>
              </a>
            );
          })}
        </div>
        <div className="header__auth">
          <div className="auth__buttons">
            <button className="header__login_button">Вход</button>
            <button className="header__register_button">Регистрация</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
