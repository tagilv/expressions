import React from 'react'
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'

interface ExpressionType {
  text: string;
  likes: number;
  _id: string;

}

type ExpressionsType = ExpressionType[]
// Now ExpressionsList component will recive props at request time
// {expressions} refers to the property in the return statement inside the server side props

// Since your data is an Object you can't use map on it as Object don't have map method, you're trying to map source property which is inside expressions array, need to add data.expressions

// the code we write inside the getserversideprops wont even be included in the JS bundle that is sent to the browser

// You can write server side code direclty in the getserversiseprops. Code you would see in nodejs like accssing the file sustem using the fs module can be done here.

// Note: getserversieprops is allowed only in a page and cannot be run from a regualr component file

// Note: getserversideprops should rerurn and object and object should contain a props key which is an object
const ExpressionsList = ({expressions}: {expressions: {allExpressions: ExpressionsType }})  => {
  console.log("expressions to frontend", expressions.allExpressions)

  return (
    <>
      <div>Expressions</div>
      {
        expressions.allExpressions.map((expression) => {
          return (
            <div key={expression._id}>
              <h2>Text: {expression.text}</h2>
              <h2>Likes: {expression.likes}</h2>
              <h2>expression._id: {expression._id}</h2>
            </div>
          )
        })
      }
    </>
  )
}

export default ExpressionsList

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log("context", context)
  console.log("context.req.url", context.req.url)
  // Gets the data and retunrs it as props
  // When you export this function it will be called by the server on every request, insdie that function you can fetch external data and send it as props to the page (expressions)
  const response = await fetch("http://localhost:5005/api/expressions/all")
  const data = await response.json()
  console.log("data", data.allExpressions)
  return {
    props: {
      expressions: data,
    }, // will be passed to the page component as props
  }
}
