import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Balance from './components/Balance';
import Login from "./components/Login";
import Withdraw from "./components/Withdraw";
import TranfserMoney from "./components/TranfserMoney";
import Deposit from "./components/Deposit";

export const routes = createBrowserRouter([
    { path: "", element: <Login /> },
    {
        path: "dashboard", element: <Dashboard />,
        children: [
            { path: "balance", element: <Balance /> },
            { path: "withdraw", element: <Withdraw /> },
            { path: "deposit", element: <Deposit /> },
            { path: "transfer", element: <TranfserMoney /> },
        ]
    },

])
