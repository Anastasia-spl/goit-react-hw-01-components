import PropTypes from 'prop-types';
import styles from './Statistics.module.scss';
import randColor from './colorRandomizer';

const Statistics = ({ title, stats }) => {
  const statsItems = stats.map(statsItem => {
    const { id, label, percentage } = statsItem;
    const backgroundColor = randColor();
    return (
      <li
        className={styles.item}
        key={id}
        style={{ backgroundColor: backgroundColor }}
      >
        <span className={styles.label}>{label}</span>
        <span className={styles.percentage}>{percentage}%</span>
      </li>
    );
  });

  return (
    <section className={styles.statistics}>
      <div className={styles.wrapper}>
        {title && <h2 className={styles.title}>{title}</h2>}

        <ul className={styles.statList}>{statsItems}</ul>
      </div>
    </section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Statistics;
