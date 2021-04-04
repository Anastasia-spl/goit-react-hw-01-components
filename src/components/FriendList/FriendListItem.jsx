import { Fragment } from 'react';
import PropTypes from 'prop-types';
import defaultAvatar from '../../images/defaultAvatar.jpeg';
import { createUseStyles } from 'react-jss';

const styles = createUseStyles({
  status: {
    display: 'block',
    width: 25,
    height: 25,
    borderRadius: '50%',
    backgroundColor: isOnline => (isOnline ? 'green' : 'red'),
  },
  img: {
    width: 100,
    height: 100,
  },
});

const FriendListItem = ({ avatar, name, isOnline }) => {
  const classes = styles(isOnline);
  const { status, img } = classes;
  return (
    <Fragment>
      <span className={status}></span>
      <img className={img} src={avatar} alt="Avatar" width="48" />
      <p className={name}>{name}</p>
    </Fragment>
  );
};

FriendListItem.defaultProps = {
  avatar: defaultAvatar,
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
