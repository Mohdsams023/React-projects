import React from 'react';
import Friends from './Friends';
import InitialFriends from './Data';
import AddFriend from './AddFriend';

function FriendsList() {
  return (
    <>
      <div className="flex flex-col w-full md:w-2/3">
        {InitialFriends.map((friend) => (
          <Friends friend={friend} key={friend.id} />
        ))}
        <Button></Button>
        <AddFriend />
      </div>
    </>
  );
}
function Button() {
  return (
    <button className="px-4 py-2 bg-yellow-500 text-white rounded-md">Add Friend</button>

  )
}
export default FriendsList;
