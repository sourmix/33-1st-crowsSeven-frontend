import { React, useState } from 'react';
import './Login.scss';

const Login = () => {
  const [inputValue, setInputValue] = useState({
    id: '',
    pw: '',
  });

  const { id, pw } = inputValue;

  const handleInput = e => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const goToMain = () => {
    fetch('http://10.58.3.110:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: id,
        password: pw,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.token) {
          localStorage.setItem('token', result.token);
        }
      });
  };

  return (
    <div>
      <section className="loginArea">
        <div className="loginTitle">CROWS SEVEN</div>
        <div className="inputArea">
          <div className="idLine">
            <span className="idInputLine">Id</span>
            <input
              className="idInput"
              type="text"
              name="id"
              onChange={handleInput}
            />
          </div>
          <div className="pwLine">
            <span className="pwInputLine">Password</span>
            <input
              className="pwInput"
              type="password"
              name="pw"
              onChange={handleInput}
            />
          </div>
        </div>
        <button
          className="signBtn"
          onClick={goToMain}
          disabled={id.includes('@') && pw.length >= 5 ? false : true}
        >
          SIGN IN
        </button>
        <div className="loginFooter">
          <div className="findUser">
            <div className="forgotId">Forgot Your Id?</div>
            <div>or</div>
            <div className="forgotPw">Password</div>
          </div>
          <div className="createAccount">CreateAccount</div>
        </div>
      </section>
    </div>
  );
};

export default Login;
