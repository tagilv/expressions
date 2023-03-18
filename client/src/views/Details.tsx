import React from 'react'
import { useParams } from 'react-router-dom'

type Props = {}

const Details = (props: Props) => {
  console.log("useparams", useParams())
  const { expression } = useParams()
  return (
    <div>
      <p>More info about {expression}</p>
    </div>

  )
}

export default Details
