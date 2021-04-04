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
  item: {
    margin: '10px',
  },
});

const FriendList = ({ friends }) => {
  const classes = styles();
  const { friendList, item } = classes;
  return (
    <ul className={friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li className={item} key={id}>
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
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
