import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
    return (
       <ul className={css.statList}>
          {friends.map(friend => (
             <li className={css.item} key={friend.id}>
                <span
                   className={css.status}
                   style={
                      friend.isOnline
                         ? { backgroundColor: 'green' }
                         : { backgroundColor: 'red' }
                   }
                ></span>
                <img
                   className="avatar"
                   src={friend.avatar}
                   alt="User avatar"
                   width="48"
                />
                <p className="name">{friend.name}</p>
             </li>
          ))}
       </ul>
    );
 };

FriendList.prototype = {
   friends: PropTypes.arrayOf(
      PropTypes.shape({
         avatar: PropTypes.string.isRequired,
         name: PropTypes.string.isRequired,
         isOnlyne: PropTypes.bool.isRequired,
         id: PropTypes.number.isRequired,
      })
   ),
};
