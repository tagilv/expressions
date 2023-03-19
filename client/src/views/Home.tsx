import React from 'react'
import { AllExpressions } from '../components/AllExpressions'
import { NavLink } from 'react-router-dom'


type Props = {}

const Home = (props: Props) => {
  return (
    <div>

      <AllExpressions />
      <div className="flex-col text-center mt-20 mb-20">
      </div>



    </div>
  )
}

export default Home
