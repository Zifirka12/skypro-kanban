import "../App/App.css";

export default function Card({ title, description }) {
    return (
        <div className="card">
            <p className="card__title">{title}</p>
            <p className="card__description">{description}</p>
        </div>
    );
}
