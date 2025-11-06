import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { MainPage } from "../pages/MainPage";
import { SignInPage } from "../pages/SignInPage";
import { SignUpPage } from "../pages/SignUpPage";
import { CardPage } from "../pages/CardPage";
import { NewCardPage } from "../pages/NewCardPage";
import { ExitPage } from "../pages/ExitPage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { PrivateRoute } from "./PrivateRoute";

function AppRoutes() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  // Добавляем состояние авторизации
  const [isAuth, setIsAuth] = useState(() => !!localStorage.getItem("token"));

  return (
    <Routes>
      <Route element={<PrivateRoute isAuth={isAuth} />}>
        {/* Главная страница */}
        <Route
          path="/"
          element={<MainPage loading={loading} setIsAuth={setIsAuth} />}
        >
          {/* Добавление задачи */}
          <Route path="/new-card" element={<NewCardPage />} />
          {/* Просмотр и редактирование задачи */}
          <Route path="/card/:id" element={<CardPage />} />
          {/* Страница выхода */}
          <Route path="/exit" element={<ExitPage setIsAuth={setIsAuth} />} />
        </Route>
      </Route>
      {/* Страница входа */}
      <Route path="/sign-in" element={<SignInPage setIsAuth={setIsAuth} />} />
      {/* Страница регистрации */}
      <Route path="/sign-up" element={<SignUpPage setIsAuth={setIsAuth} />} />
      {/* Страница 404 (любой несуществующий маршрут) */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
