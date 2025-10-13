import "../App/App.css";

export default function Column({ title, children }) {
    return (
        <div className="column">
            <div className="column__title">{title}</div>
            <div className="cards">{children}</div>
        </div>
    );
}
