import { useState } from 'react'
import { deposit } from "../stores/user"
import { useDispatch, useSelector } from 'react-redux'
import toast, { Toaster } from 'react-hot-toast';

const Deposit = () => {

    const balance = useSelector((state) => state.user.user.balance);
    const [depositAmount, setDepositAmount] = useState(0);

    const dispatch = useDispatch()

    const handleAmountChange = (e) => {
        setDepositAmount(e.target.value);
    };

    const maxDepositOnce = 10000;

    const handleDeposit = () => {
        if (depositAmount > 0) {
            if (depositAmount - maxDepositOnce <= 0) {
                dispatch(deposit({ quantity: depositAmount }));
                toast.success(`${depositAmount}₺ deposit process is successful!`, { duration: 2000 })
            } else {
                toast.error("You cannot deposit more than 10000 ₺ at a time.");
            }
        } else {
            toast.error('The amount cannot be 0 or negative.')
        }

    };

    return (
        <div className="max-w-md mx-auto my-8 p-6 bg-white rounded-md shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-700">Deposit Money</h2>
            <h3 className='text-gray-500'>Your total balance: {balance} ₺</h3>
            <label className="block mb-4">
                <span className="text-gray-700">Enter the amount you want to deposit</span>
                <input
                    className="block w-full p-2 border border-gray-300 rounded-md mt-2 outline-indigo-500"
                    type="number"
                    min="0"
                    step="1"
                    value={depositAmount}
                    onChange={handleAmountChange}
                />
            </label>
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
                onClick={handleDeposit}
            >
                Deposit
            </button>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />

        </div>
    );
}

export default Deposit