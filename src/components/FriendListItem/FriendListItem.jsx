import css from './FriendListItem.module.css';
import PropTypes from 'prop-types';

const FriendListItem = ({ friendsItem }) => {
  const { avatar, name, isOnline } = friendsItem;
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

FriendListItem.propTypes = {
  friendsItem: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
