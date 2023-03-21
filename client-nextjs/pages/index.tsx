import React, { useEffect, useState } from 'react'
import { GetServerSideProps } from 'next'

interface ExpressionType {
  text: string;
  likes: number;
  _id: string
}

// type ExpressionsType = ExpressionType[]
// removed ExpressionsType
// Comment added

const ExpressionsList = ({expressions}: {expressions: {allExpressions: ExpressionType[] }})  => {

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredExpressions, setFilteredExpressions] = useState(expressions.allExpressions)

useEffect(() => {
  const filtered = expressions.allExpressions.filter((expression) =>
    expression.text.toLowerCase().includes(searchTerm.toLowerCase())
  );
  setFilteredExpressions(filtered)
}, [searchTerm, expressions ])

  return (
    <div className="w-full">
      <input
        type="text"
        placeholder="Search expressions..."
        className="w-full p-2 mb-4 rounded border border-gray-300"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 m-4">

      {filteredExpressions.map((expression) => (
        <div key={expression._id} className="bg-gray-100 rounded-lg p-4">
          <p className="text-lg font-bold mb-2">{expression.text}</p>
          <p className="text-sm">Likes: {expression.likes}</p>
        </div>
      ))}
    </div>
   </div>
  )
}

export default ExpressionsList

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log("context", context)
  console.log("context.req.url", context.req.url)
  const response = await fetch("http://localhost:5005/api/expressions/all")
  const data = await response.json()
  console.log("data", data.allExpressions)
  return {
    props: {
      expressions: data,
    },
  }
}

  // return (
  //   <>
  //     <div>Expressions</div>
  //     {
  //       expressions.allExpressions.map((expression) => {
  //         return (
  //           <div key={expression._id}>
  //             <h2>Text: {expression.text}</h2>
  //             <h2>Likes: {expression.likes}</h2>
  //             <h2>expression._id: {expression._id}</h2>
  //           </div>

  //         )
  //       })
  //     }
  //   </>
  // )
