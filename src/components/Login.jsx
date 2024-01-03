import { useState } from 'react';
import { users } from '../data';
import { useDispatch, useSelector } from 'react-redux'
import { setUserData, setLogin } from "../stores/user"
import { useNavigate } from 'react-router-dom';
const Login = ({ onLogin }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch()

    console.log(useSelector((state) => state.user.user));

    const [tcno, setTcno] = useState('');
    const [password, setPassword] = useState('');
    const [loginAttempts, setLoginAttempts] = useState(0);
    const [user, setUser] = useState({ id: 0, tcno: "", password: "", balance: 2000, name: "", surname: "" });
    const login = useSelector((state) => state.user.isLoggedIn);
    console.log("main login: " + JSON.stringify(login))

    const handleLogin = () => {

        const currentUser = users.find(user => user.tcno === tcno); // find user by tcno
        setUser(currentUser);
        console.log(user)
        if (user && user.password === password) {
            dispatch(setUserData(user));
            dispatch(setLogin());
            navigate('/dashboard');
        } else {
            setLoginAttempts(loginAttempts + 1);
            if (loginAttempts >= 2) {
                alert('Hesabınız bloke oldu. Lütfen daha sonra tekrar deneyin.');
            } else {
                alert('Hatalı kullanıcı adı veya şifre. Kalan deneme hakkınız: ' + (2 - loginAttempts));
            }
        }
    };

    return (
        <div className="max-w-md mx-auto bg-gray-200 p-8 mt-10 shadow-md">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <label className="block mb-4">
                <span className="text-gray-700">Username:</span>
                <input
                    type="text"
                    value={tcno}
                    onChange={(e) => setTcno(e.target.value)}
                    className="form-input mt-1 block w-full rounded-lg p-2"
                />
            </label>
            <label className="block mb-4">
                <span className="text-gray-700">Password:</span>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-input mt-1 block w-full rounded-lg p-2"
                />
            </label>
            <button
                onClick={handleLogin}
                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
            >
                Login
            </button>

        </div>

    );
};

export default Login;
