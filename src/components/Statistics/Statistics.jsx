import css from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  // console.log(stats);
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.stat__list}>
        {stats.map(({ id, label, percentage }) => {
          console.log(percentage);
          return (
            <li key={id} className="item">
              <span className="label">{label}</span> <br />
              <span className="percentage">{percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default Statistics;
