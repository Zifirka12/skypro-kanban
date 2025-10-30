import React, { useState, useEffect } from "react";
import PopBrowse from "../components/popups/PopBrowse/PopBrowse.jsx";
import tasks from "../mocktask.jsx";
import { useParams, useNavigate } from "react-router-dom";

function ViewEditTasks() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [task, setTask] = useState(null);

    useEffect(() => {
        const foundTask = tasks.find((t) => t.id === id);
        setTask(foundTask);
    }, [id]);

    const handleClose = () => {
        navigate(-1);
    };

    if (!task) return <div>Загрузка...</div>;

    return <PopBrowse task={task} onClose={handleClose} />;
}

export default ViewEditTasks;