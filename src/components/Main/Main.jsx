import { Column } from "../Column/Column";
// import { cardList } from "../../data";
import { MainStyle, MainBlock, MainContent } from "../Main/Main.styled";

export const Main = ({ loading, tasks, error }) => {
  const columnTitles = [
    "БЕЗ СТАТУСА",
    "НУЖНО СДЕЛАТЬ",
    "В РАБОТЕ",
    "ТЕСТИРОВАНИЕ",
    "ГОТОВО",
  ];

  return (
    <MainStyle>
      <div className="container">
        <MainBlock>
          {loading ? (
            <div className="loading-message">
              <p>Данные загружаются...</p>
            </div>
          ) : (
            <MainContent>
              {/* Используем .map() для рендеринга каждой колонки */}
              {columnTitles.map((title) => (
                <Column
                  key={title}
                  title={title}
                  tasks={tasks}
                  loading={loading}
                  // Фильтруем `cardList` по статусу и передаем отфильтрованный список карточек в Column
                  cardList={tasks.filter(
                    (task) => task.status.toLowerCase() === title.toLowerCase()
                  )}
                />
              ))}
            </MainContent>
          )}
        </MainBlock>
      </div>
      <p>{error}</p>
    </MainStyle>
  );
};
