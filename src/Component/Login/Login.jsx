import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Login() {
  const [userName, setUserName] = useState('');
  let navigate = useNavigate();
  let handleLogin = () => {
    //login code
    alert('login successfully');
    // navigate('/my-app/home')
    navigate('/my-app/home', {
      state: {
        isLogin: true,
        userName: userName,
        details: {
          id: 1,
          name: 'abc',
        },
      },
    });
  };
  return (
    <div>
      <h1>Login Page</h1>
      <input
        type="text"
        name="userName"
        value={userName}
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
