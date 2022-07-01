import React from "react";
import QuestionComponent from "../../components/QuestionComponent";

export const FirstQuestion = () => {
  return (
    <QuestionComponent
      routeN="/FinishPage"
      routeB="/question03"
      page="FourthQuestion"
      labelQuestion="Question number four is: Where?"
    />
  );
};

export default FirstQuestion;
