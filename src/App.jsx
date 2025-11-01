import AuthProvider from "./components/context/AuthProvider.jsx";
import AppRoutes from "./components/AppRoutes.jsx";
import "./components/App/App.css";

function App() {
    return (
        <AuthProvider>
            <AppRoutes />
        </AuthProvider>
    );
}

export default App;