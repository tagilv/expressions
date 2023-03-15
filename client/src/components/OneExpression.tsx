import React from 'react'
import type { ExpressionType } from './AllExpressions';

type Props = {
  expression: ExpressionType;
}


const OneExpression = ({expression}: Props) => {

  console.log("Hi")
  return (
    <div>
      <p>
        <>
          {expression.text}
          {console.log("propssss", expression.text)}
          {/* <OneExpression text={props.text} /> */}
        </>
      </p>
    </div>
  )
}

export default OneExpression
