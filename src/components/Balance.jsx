import { Link, useLocation } from 'react-router-dom';

const Balance = () => {
    const location = useLocation();
    const user = location.state && location.state.user;
    console.log("balance user " + user);
    return (
        <div>
            <Link to="/dashboard">Geri dön</Link>
        </div>
    );
};

export default Balance;
