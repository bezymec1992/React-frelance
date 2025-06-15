import styles from './ListData.module.css';
import tennis from '../../assets/tennis.svg';
import baseball from '../../assets/baseball.svg';
import football from '../../assets/football.svg';

function ListData() {
  const list = [
    {
      id: 1,
      title: 'Football',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, incidunt!',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      image: football, // Adjust the path as necessary
    },
    {
      id: 2,
      title: 'Tennis',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, incidunt!',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      image: tennis,
    },
    {
      id: 3,
      title: 'Baseball',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, incidunt!',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      image: baseball,
    },
  ];
  return (
    <div className="container">
      <span className="span">task-5</span>
      <h1>List Data</h1>
      <ul>
        {list.map(item => (
          <li key={item.id} className="list-item">
            <div className="img__wrapp">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="info__wrapp">
              <h2 className={styles.left}>{item.title}</h2>
              <p>{item.text}</p>
              <p>{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListData;
