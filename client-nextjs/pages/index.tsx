import React, { useEffect, useRef, useState, RefObject } from "react";
import { GetServerSideProps } from "next";
import Image from "next/image";
import LandingPageImage2 from "public/LandingPageImage2.png";

interface ExpressionType {
  text: string;
  likes: number;
  _id: string;
}

// type ExpressionsType = ExpressionType[]
// removed ExpressionsType

const ExpressionsList = ({
  expressions,
}: {
  expressions: { allExpressions: ExpressionType[] };
}) => {
  // For toggle functionality
  // RefObject to import type for ref
  const [showChinese, setShowChinese] = useState(false);
  // const ref: RefObject<HTMLElement> = useRef(null)

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredExpressions, setFilteredExpressions] = useState(
    expressions.allExpressions
  );

  useEffect(() => {
    const filtered = expressions.allExpressions.filter((expression) =>
      expression.text.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredExpressions(filtered);
  }, [searchTerm, expressions]);

  const handleMouseEnter = () => {
    setShowChinese(true);
  };

  const handleMouseLeave = () => {
    setShowChinese(false);
  };

  // <div className=" bg-gray-900 pt-10 pb-14 sm:pb-20 sm:h-screen"></div>

  return (
    <div className=" bg-gradient-to-r from-gray-900 to-blue-900 pt-10 pb-14 sm:pb-20 sm:h-screen">
      {/* <div className=" bg-gray-900 pt-10 pb-14 sm:pb-20 relative isolate overflow-hidden sm:h-screen">
      <Image
        src={LandingPageImage2}
        alt="Background image of Chinese mountains"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
          /> */}

      <div className="mx-auto max-w-5xl px-6 lg:px-8  2xl:max-w-7xl">
        {/* mx-auto centers the div in the container above,
                  max-w-5xl sets the max width of the div with 64rem
                  lg:px-8 sets padding x at screens large and above, padding inside this div
               */}
        <div className="mx-auto max-w-2xl pt-32 pb-6 sm:py-48 lg:py-56">
          {/* mx-auto same as above,
          max-w-5xl sets the max width of the div with 42rem
          py-32 sets padding top and bottom to 32 on base which is mobile
          pt-32 pb-6, p top and ob padding bottom in base screen
          */}
          <div className="text-center">
            {/* text-center in this div makes all text in tags inside the div, so in h1 and p centered */}
            <div
              className="sm:h-32"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <h1 className="text-4xl font-bold tracking-tight sm:h-45 text-white sm:text-6xl">
                {/* text-4xl sets text to font size 2.25 rem (36px) and line-height to 2.5 rem (40px),
              tracking-tight sets letter-spacing to -0.025em*/}
                {showChinese ? (
                  <span>发现古老的中国智慧</span>
                ) : (
                  "Disover ancient Chinese wisdom"
                )}
              </h1>
            </div>
            <p className="mt-6 text-lg leading-8 sm:leading-10 text-gray-300">
              {/* mt-6, margin top,
              leading-8, gives element relative line hight based on its current font size, range 2-10, anything below or over would set it back to base*/}
              Chinese idioms, or 成语 (chengyu) can be a proverb, a common
              saying, an idiomatic phrase or a group of words that convey a
              figurative meaning beyond the words themselves. Chinese Chengyu
              mostly came from ancient myths, stories or historical facts.
            </p>
            <div className="mt-10 justify-center">
              {/* mt-10 marign top,
              justify-center centers the content in this div, so the input
              */}
              <input
                type="text"
                placeholder="Search expressions..."
                className="w-3/4 rounded-full border-gray-300 px-4 py-1.5 ring-1 hover:ring-4 placeholder:text-gray-400"
                // w-3/4 sets width of the elemtn to 75% of its parent
                // py-1.5 padding to the left and right of input
                // ring-1 adds border of width 1 around elenment when focused
                // hover:ring-4 add ring when hovering
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 mt-4 2xl:grid-cols-4">
          {/* grid sets it to grid,
              grid-cols-1, sets 1 col in base(mobile)
              gap-4, sets gap between between grid itmes, horizontal and vertical
          */}
          {filteredExpressions.map((expression) => (
            <div
              key={expression._id}
              className="bg-gray-100 rounded-xl p-4 transition-transform ease-in-out hover:scale-105  "
            >
              {/* rounded-lg border radius with 0.5 em, range from none to 3xl,
              p-4 padding on all sides of the card/div element
               */}

              <div className="relative">
                <p className="absolute -top-2 -right-2 rounded-md bg-red-100 px-0.5 py-0.5 text-sm font-medium text-red-800 ">
                  Qin
                </p>
              </div>
              <p className="text-lg font-bold mb-2">{expression.text}</p>
              <p className="text-sm">Likes: {expression.likes}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpressionsList;

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log("context", context);
  console.log("context.req.url", context.req.url);
  const response = await fetch("http://localhost:5005/api/expressions/all");
  const data = await response.json();
  console.log("data", data.allExpressions);
  return {
    props: {
      expressions: data,
    },
  };
};

// <div key={expression._id} className="bg-gray-100 rounded-xl p-4 transition-transform ease-in-out hover:scale-105">

// <div className=" bg-gray-900 pt-10 pb-14 sm:pb-20"></div>

// <div className="relative isolate overflow-hidden pt-14">
// <img
//   src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
//   alt=""
//   className="absolute inset-0 -z-10 h-full w-full object-cover"
//   />
// </div>

// works

// old

// <div className=" bg-gray-900 pt-10 pb-14 sm:pb-20">
//       <div className="mx-auto max-w-5xl px-6 lg:px-8">
//         {/* mx-auto centers the div in the container above,
//                   max-w-5xl sets the max width of the div with 64rem
//                   lg:px-8 sets padding x at screens large and above, padding inside this div
//                */}
//         <div className="mx-auto max-w-2xl pt-32 pb-6 sm:py-48 lg:py-56"></div>
