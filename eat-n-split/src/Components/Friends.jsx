function Friends({ friend }) {
  return (
    <div className="w-full flex items-center justify-between gap-10 mb-4">
      {/* Friend Image */}
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-300">
          <img src={friend.imgURL} alt={friend.name} className="w-full h-full object-cover" />
        </div>
        {/* Friend Name and Text */}
        <div className="ml-4">
          <h2 className="text-lg font-semibold">{friend.name}</h2>
          {friend.balance <0 &&(
            <p className='text-red-400 '>You own {friend.name} {Math.abs(friend.balance)}$</p>
          )}
          {friend.balance > 0 &&(
            <p className='text-green-400 '>You own {friend.name} {Math.abs(friend.balance)}$</p>
          )}
          {friend.balance === 0 &&(
            <p className='text-balck '>You own {friend.name} {Math.abs(friend.balance)}$</p>
          )}
        </div>
      </div>
      {/* Button */}
      <button className="px-4 py-2 bg-yellow-500 rounded-md">Select</button>
    </div>
  );
}

export default Friends;
