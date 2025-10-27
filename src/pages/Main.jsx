import React, {useEffect, useState} from "react";
import Header from "../components/Header/Header.jsx";
import Column from "../components/Column/Column.jsx";
import "../components/App/App.css";
import {
    AppWrapper, Main, MainContainer, MainBlock, MainContent, AppLoadingMessage,
} from "../components/App/App.styled.js";
import PopBrowse from "../components/popups/PopBrowse/PopBrowse.jsx";
import PopNewCard from "../components/popups/PopNewCard/PopNewCard.jsx";
import {fetchTasks} from "../services/api.js";
import cardList from "../data.js";

const columns = ["Без статуса", "Нужно сделать", "В работе", "Тестирование", "Готово",];

const MainPage = () => {
    const [tasks, setTasks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Изначально загружаем данные из data.js
        setTasks(cardList);
        setIsLoading(false);
        
        // Пытаемся загрузить данные из API, если токен есть
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
        const token = userInfo?.token;

        if (!token) {
            console.log("Нет токена, используем данные из data.js");
            return;
        }

        async function loadTasks() {
            try {
                const data = await fetchTasks({token});
                // Если API вернул данные, используем их
                if (data && data.length > 0) {
                    setTasks(data);
                    console.log("Загружены данные из API");
                }
            } catch (err) {
                console.error("Ошибка загрузки задач:", err.message);
                console.log("Используем данные из data.js");
            }
        }

        loadTasks();
    }, []);

    // группируем по статусам
    const groupedCards = columns.reduce((acc, status) => {
        acc[status] = tasks.filter((card) => card.status === status);
        return acc;
    }, {});

    if (isLoading) {
        return <AppLoadingMessage>Задачи загружаются...</AppLoadingMessage>;
    }

    return (<AppWrapper>
        <PopNewCard/>
        <PopBrowse/>
        <Header/>
        <Main>
            <MainContainer>
                <MainBlock>
                    <MainContent>
                        {columns.map((status) => (<Column
                            key={status}
                            title={status}
                            cards={groupedCards[status] || []}
                        />))}
                    </MainContent>
                </MainBlock>
            </MainContainer>
        </Main>
    </AppWrapper>);
};

export default MainPage;