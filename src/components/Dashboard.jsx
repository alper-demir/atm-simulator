import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { setLogin } from "../stores/user"
import { useEffect } from 'react';

const Dashboard = () => {

    const user = useSelector((state) => state.user.user);
    const userName = user.name + " " + user.surname.toUpperCase();
    const loginStatus = useSelector((state) => state.user.isLoggedIn);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logout = () => {
        dispatch(setLogin({ status: false }));
    }

    useEffect(() => {
        if (!loginStatus) {
            return navigate("/");
        }

    }, [])

    return (
        <div className="bg-gray-100 min-h-screen p-4">
            <div className="max-w-md mx-auto bg-white p-8 mt-20 shadow-md">
                <div>
                    {userName.length > 1 && (
                        <h4 className="text-lg font-bold mb-4 text-gray-500">Hello, {userName}</h4>
                    )}
                </div>
                <ul className="flex flex-col space-y-4 font-bold text-sm">
                    <li className='bg-indigo-500 hover:bg-indigo-400 px-3 py-2 max-w-fit rounded-md transition duration-300'>
                        <Link
                            to="/dashboard/balance"
                            className="text-white"
                        >
                            Check Balance
                        </Link>
                    </li>
                    <li className='bg-indigo-500 hover:bg-indigo-400 px-3 py-2 max-w-fit rounded-md transition duration-300'>
                        <Link to="/dashboard/withdraw" className="text-white">
                            Withdraw Money
                        </Link>
                    </li>
                    <li className='bg-indigo-500 hover:bg-indigo-400 px-3 py-2 max-w-fit rounded-md transition duration-300'>
                        <Link to="/dashboard/deposit" className="text-white">
                            Deposit Money
                        </Link>
                    </li>
                    <li className='bg-indigo-500 hover:bg-indigo-400 px-3 py-2 max-w-fit rounded-md transition duration-300'>
                        <Link to="/dashboard/transfer" className="text-white">
                            Money Transfer
                        </Link>
                    </li>
                    <li className='bg-red-500 hover:bg-red-400 px-3 py-2 max-w-fit rounded-md transition duration-300'>
                        <Link to="/" onClick={logout} className="text-white">
                            Logout
                        </Link>
                    </li>
                </ul>
                <div className="mt-4">
                    <Outlet />
                </div>
            </div>
        </div>
    );


};

export default Dashboard;
