import React, { useEffect, useState } from 'react'
import OneExpression from './OneExpression';

//TypeScript convention for primitive types, lower case

interface ExpressionType {
  text: string;
  likes: number;
  short?: boolean;
}

// Here we have an array of interfacs (we use type here since we have array which is a primite)

type ExpressionsType = ExpressionType[]

// expressions is an array of Expression so init needs to be an array of Expression

const init: ExpressionsType = [
  {
    text: "test chengyu",
    likes: 3,
    short: true,
  },
];

// Using generic with a state, we can dienfine that this state can have more then one type of return

// Why remove the const AllExpressions = (props: ExpressionsType) => { here?
// Exp
// The error message is indicating that you are trying to pass an object of type {} as props to the component AllExpressions, but the component is expecting an array of ExpressionType objects.

// You have defined AllExpressions to take props of type ExpressionsType, which is an array of ExpressionType objects, but in your App.tsx file you are not passing any props to the AllExpressions component. Instead, you are trying to pass an empty object {} as props.

// To fix this error, remove the props declaration from the AllExpressions component, and use the expressions state variable directly inside the component. Here is the modified AllExpressions.tsx file:


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



//Pre


  //   return (
  //   <>
  //     <p>this is the main home</p>
  //     <div>
  //       <>
  //         {expressions && expressions.map((expression) => {
  //           return <OneExpression key={expression.text} text={expression.text} />
  //         })}

  //       </>
  //   </div>
  //     </>

  // )
