import FriendListItem from '../FriendListItem/FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(el => {
        return <FriendListItem key={el.id} friendsItem={el} />;
      })}
    </ul>
  );
};

export default FriendList;
