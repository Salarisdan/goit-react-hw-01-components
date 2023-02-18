import PropTypes from 'prop-types';
import css from './Profile.module.css';

export const Profile = ({
   avatar,
   username,
   tag,
   location,
   stats,
   followers,
   views,
   likes,
}) => {
   return (
      <div className={css.profile}>
         <div className="description">
            <img src={avatar} alt="User avatar" className={css.avatar} />
            <p className="name">{username}</p>
            <p className={css.tag}>@{tag}</p>
            <p className={css.location}>{location}</p>
         </div>

         <ul className={css.stats}>
            <li>
               <span className={css.label}>Followers</span>
               <span className="quantity">{stats.followers}</span>
            </li>
            <li>
               <span className={css.label}>Views</span>
               <span className="quantity">{stats.views}</span>
            </li>
            <li>
               <span className={css.label}>Likes</span>
               <span className="quantity">{stats.likes}</span>
            </li>
         </ul>
      </div>
   );
};

Profile.propTypes = {
   tag: PropTypes.string,
   location: PropTypes.string,
   avatar: PropTypes.string,
   stats: PropTypes.objectOf(PropTypes.number),
};
