import { useState } from 'react';
import styles from './MenuGo.module.css';

function MenuGo() {
  const [menu, setMenu] = useState('');
  const [readyForCook, setReadyForCook] = useState(() => []);
  const [dishProcessing, setDishProcessing] = useState(() => []);
  const [dishCook, setDishCook] = useState(() => []);

  function add() {
    if (menu.trim()) {
      setReadyForCook(prev => [
        ...prev,
        {
          id: new Date().getTime(),
          title: menu,
        },
      ]);
    }
    setMenu('');
  }

  function getProcess(item) {
    setReadyForCook(readyForCook.filter(element => element !== item));
    setDishProcessing([...dishProcessing, item]);
  }

  function cookProcess(item) {
    setDishProcessing(dishProcessing.filter(element => element !== item));
    setDishCook([...dishCook, item]);
  }

  function readyForServe(item) {
    setDishCook(dishCook.filter(element => element !== item));
  }

  return (
    <div className={`${styles.menu} container`}>
      <span className="span">task-6</span>
      <h1>Menu</h1>
      <div className={styles.wrapper}>
        <label>
          Order you meal
          <input type="text" value={menu} onChange={e => setMenu(e.target.value)} />
        </label>

        <button className={styles.btn} onClick={add}>
          send
        </button>
      </div>
      <div className={styles.navs}>
        <ul>
          <h2>start cook</h2>
          {readyForCook.map(item => (
            <li key={item.id} className={styles.item}>
              {item.title} <button onClick={() => getProcess(item)}>Start Cook</button>
            </li>
          ))}
        </ul>

        <ul>
          <h2>Cook</h2>
          {dishProcessing.map(item => (
            <li key={item.id} className={styles.item}>
              {item.title} <button onClick={() => cookProcess(item)}>Cook</button>
            </li>
          ))}
        </ul>

        <ul>
          <h2>Ready to Serve</h2>
          {dishCook.map(item => (
            <li key={item.id} className={styles.item}>
              {item.title} <button onClick={() => readyForServe(item)}>Cook</button>
            </li>
          ))}
        </ul>
      </div>

      <ul></ul>
    </div>
  );
}

export default MenuGo;
