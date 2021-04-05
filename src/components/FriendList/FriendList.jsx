import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import { createUseStyles } from 'react-jss';

const styles = createUseStyles({
  friendList: {
    listStyle: 'none',
    display: 'flex',
    margin: '-10px',
    marginBottom: '40px',
  },
});

const FriendList = ({ friends }) => {
  const classes = styles();
  const { friendList } = classes;
  return (
    <ul className={friendList}>
      {friends.map(friend => (
        <li>
          <FriendListItem key={friend.id} friend={friend} />
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default FriendList;
