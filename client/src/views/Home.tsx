// import React, { useEffect, useState } from 'react'

// //TypeScript convention for primitive types, lower case
// interface Expression {
//   text: string;
//   likes: number;
//   short?: boolean;
// }

// type Expressions = Expression[]

// // expressions is an array of Expression so init needs to be an array of Expression
// const init: Expressions = [
//   {
//     text: "test chengyu",
//     likes: 3,
//     short: true,
//   },
// ];

// const Home = (props: Expressions) => {
//   const [expressions, setExpressions] = useState(init)

//   const getAllExpressions = async () => {

//     try {
//       const response = await fetch("http://localhost:5004/api/expressions/all")
//       const results = await response.json()
//       console.log("results", results)
//       setExpressions(results)
//     } catch (error) {
//       console.log("error getting expressions", error)
//     }
//   }

//   useEffect(() => {
//     getAllExpressions()
//   }, [])



//   return (
//     <>
//       <p>this is the main home</p>
//       <div>
//         <>
//           {expressions && expressions.map((expression) => {
//             console.log("expression", expression.likes)
//             return <Expression expression={expression} />
//         })}
//         </>
//     </div>
//       </>

//   )
// }

// export default Home


export {}
