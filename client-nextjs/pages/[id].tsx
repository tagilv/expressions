import React from "react";
import { GetServerSideProps } from "next";

interface ExpressionType {
  text: string;
  likes: number;
  _id: string;
}

// type ExpressionsType = ExpressionType[]
const ExpressionItem = ({ expression }: { expression: ExpressionType }) => {
  return (
    <>
      <div>expressionsItem</div>
      <div>
        <div key={expression._id}>
          <h2>{expression.text}</h2>
        </div>
      </div>
    </>
  );
};

export default ExpressionItem;

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log("context", context);
  console.log("context.req.url", context.req.url);
  const { params } = context;
  const expressionId = context.params?.id;

  const response = await fetch(
    `http://localhost:5005/api/expressions/${expressionId}`
  );
  console.log("response.text", response.status);
  console.log("expressionId", expressionId);
  const data = await response.json();
  console.log("data for singular expression", data);

  return {
    props: {
      expression: data.expressionById,
    },
  };
};
