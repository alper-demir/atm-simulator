import { useState } from 'react'
import { moneyTransfer } from "../stores/user"
import { useDispatch, useSelector } from 'react-redux'
import toast, { Toaster } from 'react-hot-toast';

const TranfserMoney = () => {

    const userId = useSelector((state) => state.user.user.id);
    const balance = useSelector((state) => state.user.user.balance);

    const [transferAmount, setTansferAmount] = useState(0);
    const [receiver, setReceiver] = useState(0);

    const dispatch = useDispatch()
    const handleAmountChange = (e) => {
        setTansferAmount(e.target.value);
    };

    const handleReceiverChange = (e) => {
        setReceiver(e.target.value);
    };

    const handleTransferMoney = () => {

        if (transferAmount > 0) {
            if (userId != receiver) {
                if (balance - transferAmount >= 0 && receiver !== 0) {
                    dispatch(moneyTransfer({ amount: transferAmount, receiverId: receiver, senderId: userId }));
                    toast.success(`${transferAmount}₺ money transfer was made to the account number "${receiver}".`, { duration: 2500 })
                } else {
                    toast.error("You don't have enough balance.");
                }
            } else {
                toast.error('You can not send money to yourself.');
            }
        } else {
            toast.error('The amount cannot be 0 or negative.');
        }


    };

    return (
        <div className="max-w-md mx-auto my-8 p-6 bg-white rounded-md shadow-md">

            <h2 className="text-2xl font-semibold mb-4">Tranfser Money</h2>
            <h3 className='text-gray-500'>Your total balance: {balance}</h3>
            <label className="block mb-4">
                <span className="text-gray-700">Receiver</span>
                <input
                    className="block w-full p-2 border border-gray-300 rounded-md mt-2 outline-indigo-500"
                    type="number"
                    min="0"
                    step="1"
                    value={receiver}
                    onChange={handleReceiverChange}
                />
            </label>
            <label className="block mb-4">
                <span className="text-gray-700">Amount</span>
                <input
                    className="block w-full p-2 border border-gray-300 rounded-md mt-2 outline-indigo-500"
                    type="number"
                    min="0"
                    step="1"
                    value={transferAmount}
                    onChange={handleAmountChange}
                />
            </label>
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
                onClick={handleTransferMoney}
            >
                Transfer
            </button>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
        </div>
    );
}

export default TranfserMoney