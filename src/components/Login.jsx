import { useState } from 'react';
import { users } from '../data';
import { useDispatch, useSelector } from 'react-redux'
import { setUserData, setLogin } from "../stores/user"
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const Login = ({ onLogin }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch()

    console.log(useSelector((state) => state.user.user));

    const [tcno, setTcno] = useState('');
    const [password, setPassword] = useState('');
    const [loginAttempts, setLoginAttempts] = useState(0);
    const login = useSelector((state) => state.user.isLoggedIn);
    console.log("main login: " + JSON.stringify(login))

    const handleLogin = () => {

        const currentUser = users.find(user => user.tcno === tcno); // find user by tcno

        if (currentUser && loginAttempts <= 2 && currentUser.password === password) {
            dispatch(setUserData(currentUser));
            dispatch(setLogin({ status: true }));
            navigate('/dashboard');
        }
        else {
            setLoginAttempts(loginAttempts + 1);
            if (loginAttempts > 2) {
                toast.error("You've made too many wrong entry.");
            } else {
                toast.error('Wrong username or password. Your remaining attempts: ' + (2 - loginAttempts));
            }
        }

    };

    return (
        <div className="max-w-md mx-auto p-8 mt-32 shadow-md">
            <h2 className="text-2xl font-bold mb-8 text-gray-500">Login</h2>
            <div className="max-w-md mx-auto">
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" value={tcno}
                        onChange={(e) => setTcno(e.target.value)} name="floating_text" id="floating_text" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="floating_text" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Tc No</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="password" value={password}
                        onChange={(e) => setPassword(e.target.value)} name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                </div>
                <button
                    onClick={handleLogin}
                    className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
                >
                    Login
                </button>
                <Toaster
                    position="top-right"
                    reverseOrder={false}
                />
            </div>
        </div>

    );
};

export default Login;
