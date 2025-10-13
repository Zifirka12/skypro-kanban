import "../App/App.css";

export default function Header() {
    return (
        <header className="header">
            <div className="header__container">
                <div className="header__logo _show _light">
                    <img src="/images/logo.png" alt="logo" />
                </div>
                <div className="header__logo _dark">
                    <img src="/images/logo_dark.png" alt="logo" />
                </div>
                <div className="header__user">
                    <div className="header__user-pic">
                        <img src="/images/user.png" alt="user" />
                    </div>
                    <div className="header__user-name">Ivan Ivanov</div>
                    <svg
                        className="header__user-arrow"
                        width="12"
                        height="8"
                        viewBox="0 0 12 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10.8 0.399902L12 1.5999L6 7.5999L0 1.5999L1.2 0.399902L6 5.1999L10.8 0.399902Z"
                            fill="#000"
                        />
                    </svg>
                </div>
            </div>
        </header>
    );
}
