import { useState } from 'react';
import './LoginCheck.css';
import smile from '../../assets/smile.svg'; // Adjust the path as necessary

function LoginCheck() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [addClass, setAddClass] = useState('');

  const getLogin = event => {
    setLogin(event.target.value);
  };

  const getPassword = event => {
    setPassword(event.target.value);
  };

  function checkForm() {
    if (login.toLowerCase() === 'ivan' && password === '111') {
      setAddClass('success');
    } else {
      setAddClass('error');
    }
  }

  return (
    <div className={`${addClass} container`}>
      <span className="span">task-1</span>
      <h1>Login Check</h1>
      <label>
        login:
        <input type="text" value={login} onChange={getLogin} />
      </label>

      <label>
        Password:
        <input type="text" value={password} onChange={getPassword} />
      </label>
      <button onClick={checkForm}>Enter</button>

      <img className="smile-img" src={smile} alt="smile" />
      <span>Correct pass: Ivan - 111</span>
    </div>
  );
}

export default LoginCheck;
