import React from "react";
import QuestionComponent from "../../components/QuestionComponent";

export const FirstQuestion = () => {
  return (
    <QuestionComponent
      routeN="/question02"
      routeB="/StartingPage"
      page="FirstQuestion"
      labelQuestion="Question number one is: Who?"      
    />
  );
};

export default FirstQuestion;
