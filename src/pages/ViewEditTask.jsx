import React, { useState, useEffect } from "react";
import PopBrowse from "../components/popups/PopBrowse/PopBrowse.jsx";
import Header from "../components/Header/Header.jsx";
import { PageWrapper } from "../components/App/App.styled.js";
import { useParams } from "react-router-dom";

function ViewEditTasks() {
    const { id } = useParams();
    const [task, setTask] = useState(null);

    useEffect(() => {
        // Можно добавить загрузку задачи из API по id в будущем
        // Пока используем заглушку
        setTask({ id });
    }, [id]);

    if (!task) return <div>Загрузка...</div>;

    return (
        <PageWrapper>
            <PopBrowse />
            <Header />
        </PageWrapper>
    );
}

export default ViewEditTasks;