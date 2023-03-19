import React, { useState, ReactNode } from 'react';
import { createContext } from 'react';

type User = {
  name: string,
  email: string,
} | {}


type AuthContextType = {
  user: User | null;
  setUser: (user: User) => void;
};

const defaultUser = {
  name: "testname",
  email: "testemail",
}

export const AuthContext = createContext<AuthContextType>({
  user: {} as User,
  setUser: () => { }
}
)

//In TypeScript, it's recommended to specify the types of props and state in functional components.

export const AuthContextProvider = ({children} : {children: ReactNode}) => {
  const [user, setUser] = useState<User>(defaultUser)

  // Create the function to log in with the user. Get access to the database and set your user here.
  // console.log('props', props)
  console.log('children', children)

  return (
    <AuthContext.Provider value={{user, setUser}}>{children}</AuthContext.Provider>
  );
}
