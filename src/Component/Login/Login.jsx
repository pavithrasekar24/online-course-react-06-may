import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Login() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

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
  useEffect(() => {
    console.log('mouting');
  }, []);

  useEffect(() => {
    console.log('updating for username', userName);
  }, [userName]);

  useEffect(() => {
    console.log('updating for password', password);
  }, [password]);

  useEffect(() => {
    return () => {
      console.log('unmouting');
    };
  }, []);

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
