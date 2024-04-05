import React from 'react';
import InitialFriends from './Data';

function Friends() {
  return (
    <div>
      {InitialFriends.map((friend) => (
        <div key={friend.id} className="w-1/2 flex items-center justify-between mb-4">
          {/* Friend Image */}
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-300">
              <img src={friend.imgURL} alt={friend.name} className="w-full h-full object-cover" />
            </div>
            {/* Friend Name and Text */}
            <div className="ml-4">
              <h2 className="text-lg font-semibold">{friend.name}</h2>
              <p className="text-sm text-gray-500">{friend.text}</p>
            </div>
          </div>
          {/* Button */}
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Add Friend</button>
        </div>
      ))}
    </div>
  );
}

export default Friends;
