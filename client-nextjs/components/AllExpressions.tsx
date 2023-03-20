import React, { useEffect, useState } from 'react'
import OneExpression from './OneExpression';

//TypeScript convention for primitive types, lower case

interface ExpressionType {
  text: string;
  likes: number;
  short?: boolean;
}

type ExpressionsType = ExpressionType[]


const init: ExpressionsType = [
  {
    text: "test chengyu",
    likes: 3,
    short: true,
  },
];

const AllExpressions = () => {

  const [expressions, setExpressions] = useState<ExpressionsType | null>(null)

  useEffect(() => {
    // setExpressions(init)
    const getAllExpressions = async (): Promise<void> => {

    try {
      const response = await fetch("http://localhost:5005/api/expressions/all")
      const results = await response.json()
      console.log("results from ba", results)
      console.log("results.allExpressions from ba", results.allExpressions)
      setExpressions(results.allExpressions)
    } catch (error) {
      console.log("error getting expressions", error)
    }
  }
  getAllExpressions()
  }, [])

  console.log("expressions when", expressions)


  return (
    <>
      <p>this is the main home</p>
      <p className="text-3xl font-bold underline">first text</p>
      <div>
          {expressions && expressions.map((expression) => (
            // <OneExpression key={expression.text} expression={expression} />
            <OneExpression key={expression.text} expression={expression} />
          ))}
    </div>
      </>

  )
}

export { AllExpressions }
export type {ExpressionType}
