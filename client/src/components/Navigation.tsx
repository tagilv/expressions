import React, { useContext } from 'react'
import { AuthContext } from '../context/authContext';

type Props = {}

const Navigation = (props: Props) => {

  const { user, setUser } = useContext(AuthContext);
  console.log("user", user)


  const login = () => {
    setUser(
      {
        name: "viktor",
        email: "viktoremail"
      }
    )
  }

   const logout = () => {
    setUser({})
  }

  return (
    <>
      <nav>

      </nav>

      <button onClick={login}>login</button>
      <button onClick={logout}>login</button>
      </>
  )
}

export default Navigation
