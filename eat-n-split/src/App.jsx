import React, { useState } from 'react';

const InitialFriend = [
    {
        id: 1,
        name: "Captain America",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdsxdLiq5YKPdsl27nl674CmTYVOnO8LoxdQ&usqp=CAU",
        balance: 4
    },
    {
        id: 2,
        name: "Iron Man",
        image: "https://lumiere-a.akamaihd.net/v1/images/iron_man_marvel_d9ce0209.jpeg?region=64,0,712,400",
        balance: -10
    },
    {
        id: 3,
        name: "Thor",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/Chris_Hemsworth_as_Thor.jpg/220px-Chris_Hemsworth_as_Thor.jpg",
        balance: 0
    },
];

function App() {
    const [selectedFriend, setSelectedFriend] = useState(false);

    // Function to handle friend selection
    function handleSelectedFriend(friend) {
        setSelectedFriend((currentFriend) => (currentFriend?.id === friend.id ? null : friend));
    }

    function handleSplitBill(value) {
        const { bill, paidByUser } = value;
        const friendIndex = InitialFriend.findIndex((friend) => friend.id === selectedFriend.id);
        const updatedFriends = [...InitialFriend];
        const userExpense = parseFloat(paidByUser);
        const friendExpense = parseFloat(bill) - userExpense;

        updatedFriends[friendIndex].balance += friendExpense;
        InitialFriend[friendIndex].balance += friendExpense;

        setSelectedFriend(null);
    }

    return (
        <div className="flex flex-col sm:flex-row justify-center gap-20 mx-auto items-center my-10">
            <FriendList onSelected={handleSelectedFriend} selectedFriend={selectedFriend} />
            {selectedFriend && <Split selectedFriend={selectedFriend} onSplitBill={handleSplitBill} />}
        </div>
    );
}

function FriendList({ onSelected, selectedFriend }) {
    const [showAddFriend, setShowAddFriend] = useState(false);
    const [friends, setFriends] = useState(InitialFriend);

    function handleAddFriendBtn() {
        setShowAddFriend((show) => !show);
    }

    function handleAddFriend(newFriend) {
        setFriends([...friends, newFriend]);
        setShowAddFriend(false);
    }

    return (
        <div className="flex w-full sm:w-[40%] flex-col items-center justify-center gap-5">
            <div className="w-full flex gap-4 flex-col justify-center items-center">
                {friends.map((friend) => (
                    <Friend
                        friend={friend}
                        key={friend.id}
                        selectedFriend={selectedFriend}
                        onSelected={() => onSelected(friend)} 
                    />
                ))}
            </div>
            <div className="w-full flex flex-col justify-center items-center">
                {showAddFriend && <AddFriend onAddFriend={handleAddFriend} />}
            </div>
            <div className="float-right">
                <Button onClick={handleAddFriendBtn}>
                    {showAddFriend ? 'Close' : 'Add Friend'}
                </Button>
            </div>
        </div>
    );
}

function Friend({ friend, onSelected, selectedFriend }) {
    const isSelected = selectedFriend?.id === friend.id;
    return (
        <div className={isSelected ? "flex justify-between bg-yellow-100 items-center w-full p-2 rounded-md" : "flex justify-between items-center w-full p-2"}>
            <div className="flex justify-center items-center gap-10">
                <img className='rounded-full w-16 h-16' src={friend.image} alt={friend.name} />
                <div className="flex flex-col justify-center items-start">
                    <h1 className="text-lg font-semibold">{friend.name}</h1>
                    {friend.balance > 0 && <p className='text-red-500 font-semibold'>You own {friend.name} {friend.balance} $</p>}
                    {friend.balance < 0 && <p className='text-green-400 font-semibold'>{friend.name} owns You {Math.abs(friend.balance)} $</p>}
                    {friend.balance === 0 && <p className='font-semibold'>You and {friend.name} are even</p>}
                </div>
            </div>
            <Button onClick={onSelected}>{isSelected ? 'Close' : 'Select'}</Button>
        </div>
    );
}

function Button({ children, onClick }) {
    return (
        <button onClick={onClick} className='bg-yellow-400 py-2 px-4 rounded-xl'>{children}</button>
    );
}

function AddFriend({ onAddFriend }) {
    const [name, setName] = useState('');
    const [imageURL, setImageURL] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !imageURL) return;
        const newFriend = {
            id: Math.floor(Math.random() * 10000), 
            name,
            image: imageURL,
            balance: 0
        };
        onAddFriend(newFriend);
        setName('');
        setImageURL('');
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white w-full shadow-md bg-yellow-100 rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
            <div className="mb-4 flex justify-between items-center">
                <label className="text-gray-700 text-sm font-bold" htmlFor="name">
                    Friend Name
                </label>
                <input
                    className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder="Enter friend's name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="mb-6 flex justify-between items-center">
                <label className="text-gray-700 text-sm font-bold" htmlFor="imgURL">
                    Image URL
                </label>
                <input
                    className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="imgURL"
                    type="text"
                    placeholder="Enter image URL"
                    value={imageURL}
                    onChange={(e) => setImageURL(e.target.value)}
                />
            </div>
            <div className="float-right">
                <Button type="submit">Add</Button>
            </div>
        </form>
    );
}

function Split({ selectedFriend, onSplitBill }) {
    const [bill, setBill] = useState('');
    const [paidByUser, setPaidByUser] = useState('');
    const [howIsPaying, setHowIsPaying] = useState('user');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!bill || !paidByUser) return;
        const value = { bill: bill, paidByUser: paidByUser };
        onSplitBill(value);
    };

    return (
        <div className="w-full md:w-[40%] mt-8 ">
            <form onSubmit={handleSubmit} className="bg-yellow-100 w-full shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
                <h1 className='text-uppercase text-3xl text-center mb-7 font-bold'>Split a bill with {selectedFriend.name}</h1>
                <div className="mb-4 flex justify-between ">
                    <label className="text-gray-700 text-sm font-bold mb-2" htmlFor="billValue">
                        Bill Value
                    </label>
                    <input
                        className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="billValue"
                        type="text"
                        placeholder="Enter bill value"
                        value={bill}
                        onChange={(e) => setBill(e.target.value)}
                    />
                </div>
                <div className="mb-6 flex justify-between">
                    <label className="text-gray-700 text-sm font-bold mb-2" htmlFor="yourExpense">
                        Your Expense
                    </label>
                    <input
                        className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="yourExpense"
                        type="text"
                        placeholder="Enter your expense"
                        value={paidByUser}
                        onChange={(e) => setPaidByUser(e.target.value)}
                    />
                </div>
                <div className="mb-4 flex justify-between">
                    <label className="text-gray-700 text-sm font-bold mb-2" htmlFor="payingBills">
                        Who is paying the bill
                    </label>
                    <select
                        value={howIsPaying}
                        onChange={(e) => setHowIsPaying(e.target.value)}
                        className="shadow w-32 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="payingBills"
                    >
                        <option value="user">You</option>
                        <option value={selectedFriend.name}>{selectedFriend.name}</option>
                    </select>
                </div>
                <Button type="submit">Split Bill</Button>
            </form>
        </div>
    );
}

export default App;
