import React, { useEffect, useState } from 'react'
import { GetServerSideProps } from 'next'

interface ExpressionType {
  text: string;
  likes: number;
  _id: string
}

// type ExpressionsType = ExpressionType[]
// removed ExpressionsType

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
        <div className="relative isolate bg-gray-900 pt-10 pb-14 sm:pb-20">
          <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
            <svg
              className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
              viewBox="0 0 1155 678"
            >
              <path
                fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
                fillOpacity=".2"
                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
              />
              <defs>
                <linearGradient
                  id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                  x1="1155.49"
                  x2="-78.208"
                  y1=".177"
                  y2="474.645"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#9089FC" />
                  <stop offset={1} stopColor="#FF80B5" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                  Disover ancient Chinese wisdom
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  Chinese idioms, or 成语 (chengyu) can be a proverb, a common saying, an idiomatic phrase or a group of words that convey a figurative meaning beyond the words themselves. Chinese Chengyu mostly came from ancient myths, stories or historical facts.
                </p>
                <div className="mt-10 flex items-center justify-center">
                <input
                type="text"
                placeholder="Search expressions..."
                className="w-3/4 p-2 mb-4 rounded-full border-gray-300 px-4 py-1.5 ring-1 placeholder:text-gray-400 "
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                />
                </div>
              </div>
            </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mt-4">
      {filteredExpressions.map((expression) => (
        <div key={expression._id} className="bg-gray-100 rounded-lg p-4">
          <p className="text-lg font-bold mb-2">{expression.text}</p>
          <p className="text-sm">Likes: {expression.likes}</p>
        </div>
      ))}
      </div>
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



      // <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 m-4">
      // {filteredExpressions.map((expression) => (
      //   <div key={expression._id} className="bg-gray-100 rounded-lg p-4">
      //     <p className="text-lg font-bold mb-2">{expression.text}</p>
      //     <p className="text-sm">Likes: {expression.likes}</p>
      //   </div>
      // ))}
      // </div>

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



  // return (


    // <div >
    //   <div>
    //   <p>Hero section</p>
    //   </div>


    //   <input
    //     type="text"
    //     placeholder="Search expressions..."
    //     className="w-full p-2 mb-4 rounded border border-gray-300"
    //     value={searchTerm}
    //     onChange={(e) => setSearchTerm(e.target.value)}
    //   />

    //   <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 m-4">
    //   {filteredExpressions.map((expression) => (
    //     <div key={expression._id} className="bg-gray-100 rounded-lg p-4">
    //       <p className="text-lg font-bold mb-2">{expression.text}</p>
    //       <p className="text-sm">Likes: {expression.likes}</p>
    //     </div>
    //   ))}
    //   </div>


    // </div>

  // )
