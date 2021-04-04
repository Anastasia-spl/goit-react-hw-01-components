import PropTypes from 'prop-types';
import defaultAvatar from '../../images/defaultAvatar.jpeg';
import { createUseStyles } from 'react-jss';

const styles = createUseStyles({
  profile: {
    maxWidth: 300,
    borderRadius: 5,
    padding: 15,
    border: '2px solid lightGrey',
    boxShadow: '0px 2px 10px',
    margin: '0 auto 40px',
  },
  description: {
    marginBottom: '16px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  avatar: {
    width: 300,
    marginBottom: '16px',
  },
  name: {
    color: 'black',
    margin: '0px',
    marginBottom: '12px',
  },
  tag: {
    color: 'darkGrey',
    margin: '0px',
    marginBottom: '12px',
  },
  location: {
    color: 'darkGrey',
    margin: '0px',
  },
  statsList: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  statsItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    padding: 15,
    backgroundColor: 'lightGrey',
    border: '1px solid darkGrey',
  },
  label: {
    marginBottom: '10px',
    fontSize: 15,
    color: '#525050',
  },
  quantity: {
    fontWeight: 700,
    color: 'black',
  },
});

const Profile = ({ user }) => {
  const classes = styles();
  const {
    name,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  } = user;
  return (
    <div className={classes.profile}>
      <div className={classes.description}>
        <img src={avatar} alt="User avatar" className={classes.avatar} />
        <p className={classes.name}>{name}</p>
        <p className={classes.tag}>@{tag}</p>
        <p className={classes.location}>{location}</p>
      </div>

      <ul className={classes.statsList}>
        <li className={classes.statsItem}>
          <span className={classes.label}>Followers</span>
          <span className={classes.quantity}>{followers}</span>
        </li>
        <li className={classes.statsItem}>
          <span className={classes.label}>Views</span>
          <span className={classes.quantity}>{views}</span>
        </li>
        <li className={classes.statsItem}>
          <span className={classes.label}>Likes</span>
          <span className={classes.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.defaultProps = {
  avatar: defaultAvatar,
};

Profile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
