import { useState } from "react";
import { useDispatch } from "react-redux";
import {setUser} from "../features/user/userSlice"
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const [loginError, setLoginError] = useState('');
  const users = [
    {id:1 , username: "Alfredo Arreola", email:"alf@gmail.com", password:'123456'},
    {id:1 , username: "fernando Perez", email:"fer@gmail.com", password:'24680'},
  ]
  const dispatch  = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e, userName, userPassword) => {
    e.preventDefault();
    const validateUser = users.find((user) => user.email === userName && user.password === userPassword); 

    if(validateUser !== undefined){
      dispatch(setUser(validateUser))
      setLoginError('')
      navigate('/home')
    }
    else {
      setLoginError("Usurio o password incorrecto!")
    }
  }

  return {
    handleSubmit,
    loginError 
  }
}

export default useLogin;