import {useContext, useState, useEffect} from "react";
import {AuthContext} from "./AuthContext";
import {fetchTasks} from "../../services/api.js";
import {TasksContext} from "./TasksContext";

export const TasksProvider = ({children}) => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const {user} = useContext(AuthContext);

    useEffect(() => {
        const loadTasks = async () => {
            if (!user?.token) return;

            setLoading(true);
            try {
                const data = await fetchTasks({token: user.token});
                setTasks(data);
            } catch (error) {
                setError("Ошибка загрузки задач");
                console.error("Ошибка загрузки задач", error);
            } finally {
                setLoading(false);
            }
        };

        loadTasks();
    }, [user]);

    return (<TasksContext.Provider value={{tasks, setTasks, loading, error}}>
        {children}
    </TasksContext.Provider>);
};

export default TasksProvider;