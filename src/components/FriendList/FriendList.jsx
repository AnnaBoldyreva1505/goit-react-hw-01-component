import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        // РЕТЕЕЕЕЕЕРРРРН ИЗ MAP ОБЯЗАТЕЛЕН!!!!!!!!!
          return (

          <li key={id} className={styles.item}>
                  <span className={styles.status}>{ isOnline}</span>
            <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
                  <p className={styles.name}>{name}</p>
          </li>
        );
      })}
    </ul>
  );
};
