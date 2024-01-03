import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <div className="text-white font-bold text-xl">ATM Uygulaması</div>
                    <div className="space-x-4">
                        <Link to="/dashboard" className="text-white">Dashboard</Link>
                        <Link to="/balance" className="text-white">Bakiye Kontrolü</Link>
                        <Link to="/withdraw" className="text-white">Para Çekme</Link>
                        <Link to="/deposit" className="text-white">Para Yatırma</Link>
                        <Link to="/transfer" className="text-white">Para Transferi</Link>
                        <Link to="/logout" className="text-white">Oturumu Kapat</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
