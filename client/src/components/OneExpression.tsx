import React from 'react'
import type { ExpressionType } from './AllExpressions';
import { Link } from 'react-router-dom';

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
          <Link to={expression.text}>Go to expression</Link>
          {/* <OneExpression text={props.text} /> */}
        </>
      </p>
    </div>
  )
}

export default OneExpression


//Pre

// import React from 'react'

// interface Props {
//   text: string;
// }

// const OneExpression = (props: Props) => {

//   console.log("Hi")
//   return (
//     <div>
//       <p>
//         <>
//         {props.text}
//           {console.log("propssss", props.text)}
//           {/* <OneExpression text={props.text} /> */}
//         </>
//       </p>
//     </div>
//   )
// }

// export default OneExpression
