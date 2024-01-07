import { createSlice } from '@reduxjs/toolkit'
import { users } from '../data';
const initialState = {
    user: { id: 0, tcno: "", password: "", balance: 0, name: "", surname: "" },
    isLoggedIn: false
}

function updateUserBalance(updatedUserId, updatedBalance) {
    console.log("updatedUserId: " + updatedUserId);
    console.log("updatedBalance: " + updatedBalance);

    const index = users.findIndex(user => user.id === updatedUserId);

    if (index !== -1) {
        users[index] = { ...users[index], balance: updatedBalance };
    }

    console.log(users);
}


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, action) => {
            state.user = action.payload
        },
        setLogin: (state, action) => {
            state.isLoggedIn = action.payload.status;
        },
        withdraw: (state, action) => {
            state.user.balance -= parseFloat(action.payload.quantity);
            updateUserBalance(state.user.id, state.user.balance);
        },
        deposit: (state, action) => {
            state.user.balance += parseFloat(action.payload.quantity);
            updateUserBalance(state.user.id, state.user.balance);
        },
        moneyTransfer: (state, action) => {
            let { senderId, receiverId, amount } = action.payload;
            amount = parseFloat(amount)
            console.log("Sender ID: ", senderId);
            console.log("Receiver ID: ", receiverId);
            console.log("Amount: ", amount);

            const senderIndex = users.findIndex(user => user.id === senderId);
            const receiverIndex = users.findIndex(user => user.id == receiverId);

            console.log("Sender Index: ", senderIndex);
            console.log("Receiver Index: ", receiverIndex);

            if (senderIndex !== -1 && receiverIndex !== -1) {
                const sender = users[senderIndex];
                const receiver = users[receiverIndex];

                console.log("Sender Before Transfer: ", sender);
                console.log("Receiver Before Transfer: ", receiver);

                if (sender.balance >= amount) {
                    // Gönderici bakiye yeterli ise transfer işlemini gerçekleştir
                    users[senderIndex] = { ...sender, balance: sender.balance - amount };
                    users[receiverIndex] = { ...receiver, balance: receiver.balance + amount };
                    state.user = users[senderIndex];
                    console.log("Sender After Transfer: ", users[senderIndex]);
                    console.log("Receiver After Transfer: ", users[receiverIndex]);
                } else {
                    console.log("Gönderici bakiye yetersiz. Transfer işlemi başarısız.");
                }
            } else {
                console.log("Geçersiz kullanıcı ID'leri. Transfer işlemi başarısız.");
            }
        }
    }
})

export const { setUserData, setLogin, withdraw, deposit, moneyTransfer } = userSlice.actions

export default userSlice.reducer