import css from './FriendListItem.module.css';

const FriendListItem = ({ friendsItem: { avatar, name, isOnline } }) => {
  return (
    <li className={css.item}>
      <span
        style={{ backgroundColor: `${isOnline ? 'red' : 'green'}` }}
        className={css.status}
      >
        status
      </span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

export default FriendListItem;
