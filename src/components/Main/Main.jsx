import "../App/App.css";
import Column from "../Column/Column";
import Card from "../Card/Card";

export default function Main() {
    return (
        <main className="main">
            <div className="container">
                <div className="main__block">
                    <div className="main__content">
                        <div className="columns">
                            <Column title="To Do">
                                <Card title="Сделать ДЗ" description="Разобрать код на компоненты" />
                            </Column>
                            <Column title="In Progress">
                                <Card title="Настроить проект" description="Подключить шрифты и стили" />
                            </Column>
                            <Column title="Done">
                                <Card title="Установить Vite" description="Инициализация проекта" />
                            </Column>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
