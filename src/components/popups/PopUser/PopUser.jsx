import "../../App.css";

export default function PopUser() {
    return (
        <div className="popup popup-user">
            <div className="popup__content">
                <h2>Профиль пользователя</h2>
                <p>Имя: Ivan Ivanov</p>
                <button>Выйти</button>
            </div>
        </div>
    );
}
