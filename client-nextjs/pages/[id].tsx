import React from 'react'
import { GetServerSideProps } from 'next'

type Props = {}

interface ExpressionType {
  text: string;
  likes: number;
  _id: string;
}

// type ExpressionsType = ExpressionType[]

const ExpressionItem = ({ expression }: { expression: ExpressionType }) => {

  return (
      <>
      <div>expressionsItem</div>
      <div>
        <div key={expression._id}>
          <h2>{expression.text}</h2>
        </div>
      </div>
      </>
  )
}

export default ExpressionItem


export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log("context", context)
  console.log("context.req.url", context.req.url)
  const { params } = context
  // console.log("params", params)
  const expressionId = context.params?.id
  // context always defined, so nonly need one ?
  // doesnt know i have _id on the backend, only seets [id]


  // const response = await fetch(`http://localhost:5005/api/expressions/all?id=${expressionId}`)
  const response = await fetch(`http://localhost:5005/api/expressions/${expressionId}`)
  console.log("response.text", response.status)
  console.log("expressionId", expressionId)

  const data = await response.json()
  console.log("data for singular expression", data)

  // nextjs servern

  return {
    props: {
      expression: data.expressionById,
      // data endast object, simplify genom att .expressionByID
    },
  }
}
