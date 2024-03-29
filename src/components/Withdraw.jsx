import { useState } from 'react'
import { withdraw } from "../stores/user"
import { useDispatch, useSelector } from 'react-redux'
import toast, { Toaster } from 'react-hot-toast';

const Withdraw = () => {

    const balance = useSelector((state) => state.user.user.balance);

    const [withdrawAmount, setWithdrawAmount] = useState(0);
    const dispatch = useDispatch()
    const handleAmountChange = (e) => {
        setWithdrawAmount(e.target.value);
    };

    const handleWithdraw = () => {
        if (withdrawAmount > 0) {
            if (balance - withdrawAmount >= 0) {
                dispatch(withdraw({ quantity: withdrawAmount }));
                toast.success(`${withdrawAmount}₺ withdrawn from your account. Please dont forget to take your money!`, { duration: 3000 })
            } else {
                toast.error("You don't have enough balance to withdraw.");
            }
        } else {
            toast.error('The amount cannot be 0 or negative.')
        }

    };

    return (
        <div className="max-w-md mx-auto my-8 p-6 bg-white rounded-md shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-700">Withdraw Money</h2>
            <h3 className='text-gray-500'>Your total balance: {balance} ₺</h3>
            <label className="block mb-4">
                <span className="text-gray-700">Enter the amount you want to withdraw</span>
                <input
                    className="block w-full p-2 border border-gray-300 rounded-md mt-2 outline-indigo-500"
                    type="number"
                    min="0"
                    step="1"
                    value={withdrawAmount}
                    onChange={handleAmountChange}
                />
            </label>
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
                onClick={handleWithdraw}
            >
                Withdraw
            </button>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
        </div>
    );
}

export default Withdraw