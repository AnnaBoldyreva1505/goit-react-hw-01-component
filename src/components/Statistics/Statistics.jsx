import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
// НЕ ЗАБЫВАТЬ ПРО ДУРАЦКИЕ СКОБКИ, А ТО БУДУ СИДЕТЬ ЕЩЕ ТРИ ЧАСА
export const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      {/* выдавать или не выдавать title */}

      <ul className={styles.list}>
        {stats.map(({ id, label, percentage }) => {
          // РЕТЕЕЕЕЕЕРРРРН ИЗ MAP ОБЯЗАТЕЛЕН!!!!!!!!!
          return (
            <li
              key={id}
              className={styles.item}
              //   Добавление инлайн стиля
              style={{
                backgroundColor: getRandomHexColor(),
              }}
            >
              <span className={styles.label}>{label}</span>
              <span className={styles.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
