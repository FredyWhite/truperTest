import React, { useState, useEffect } from 'react'
import useLogin from '../../hooks/useLogin';
import { useSelector } from 'react-redux';


function Login() {
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPasword] = useState('');
  const { handleSubmit, loginError } = useLogin();
  const user = useSelector((state) => state.user.user)

  useEffect(() => {
    console.log("user => ", user)
  }, [user])
  
  return (
    <form onSubmit={(e) => handleSubmit(e, userName, userPassword)}>
      <label>Nombre</label><br /><br />
      <input
        type='text'
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      ></input><br /><br />
      <label>Password</label><br /><br />
      <input
        type='text'
        value={userPassword}
        onChange={(e) => setUserPasword(e.target.value)}
      ></input><br /><br />
      <button type='submit'>
        Enviar
      </button><br /><br />
      {loginError !== '' && loginError}
    </form>
  )
}

export default Login