import React, {useCallback, useEffect, useState} from 'react'
import { useSelector } from 'react-redux';
import useFetch from '../../hooks/useFetch';

const Home = () => {
  const user = useSelector((state) => state.user.user);
  const {fetchData, error, data} = useFetch();

   useEffect(() => {
   }, [])

  return (
    <div>
      <h1>{user.username}</h1>
      {console.log(data)}
      {console.log(error)}
    </div>
  )
}

export default Home