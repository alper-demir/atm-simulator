import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Balance from './components/Balance';
import Login from "./components/Login";
import Withdraw from "./components/Withdraw";

export const routes = createBrowserRouter([
    { path: "", element: <Login /> },
    { path: "/dashboard", element: <Dashboard /> },
    { path: "/balance", element: <Balance /> },
    { path: "/withdraw", element: <Withdraw /> },
])
