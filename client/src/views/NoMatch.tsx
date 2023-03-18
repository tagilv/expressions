import React, { useEffect } from 'react'
import {useNavigate } from 'react-router-dom'

type Props = {}

const NoMatch = (props: Props) => {
  const clickHome = useNavigate()

  useEffect(() => {
  setTimeout(() => {
    clickHome("/")
  }, 2500);
  }, [])


  return (
    <div>
      <p>You will be redirected to home</p>
    </div>
  )
}

export default NoMatch
