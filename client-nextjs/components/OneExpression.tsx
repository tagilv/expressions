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
          <p>hello</p>
          {console.log("propssss", expression.text)}
          {/* <Link to={expression.text}>Go to expression</Link> */}
          {/* <OneExpression text={props.text} /> */}
        </>
      </p>
    </div>
  )
}

export default OneExpression
