import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { setLogin } from "../stores/user"
// #248f82  - #4bb8aa
const Dashboard = () => {

    const user = useSelector((state) => state.user.user);
    const login = useSelector((state) => state.user.isLoggedIn);
    console.log("dash: " + JSON.stringify(user))
    console.log("dash login: " + JSON.stringify(login))

    const dispatch = useDispatch();
    const logout = () => {
        dispatch(setLogin());
    }

    return (
        <div>
            <h2>Dashboard</h2>
            <ul>
                <li><Link to="/balance">Bakiye Kontrolü</Link></li>
                <li><Link to="/withdraw">Para Çekme</Link></li>
                <li><Link to="/deposit">Para Yatırma</Link></li>
                <li><Link to="/transfer">Para Transferi</Link></li>
                <li><Link to="/" onClick={logout}>Oturumu Kapat</Link></li>
            </ul>
        </div>
    );
};

export default Dashboard;
