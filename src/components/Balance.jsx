import { useSelector } from 'react-redux'
const Balance = () => {

    const balance = useSelector((state) => state.user.user.balance);

    return (
        <div className="max-w-md mx-auto my-8 p-6 bg-white rounded-md shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-700">Balance</h2>
            <h3 className='text-gray-500'>Your total balance: {balance} ₺</h3>
        </div>
    );
};

export default Balance;
