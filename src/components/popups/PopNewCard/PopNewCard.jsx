import "../../App.css";

export default function PopNewCard() {
    return (
        <div className="popup popup-newcard">
            <div className="popup__content">
                <h2>Новая карточка</h2>
                <form>
                    <input type="text" placeholder="Название" />
                    <textarea placeholder="Описание"></textarea>
                    <button type="submit">Создать</button>
                </form>
            </div>
        </div>
    );
}
