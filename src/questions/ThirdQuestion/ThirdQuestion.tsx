import React from 'react'
import QuestionComponent from '../../components/QuestionComponent'

export const FirstQuestion = () => {
  return (
    <QuestionComponent
     routeN = "/question04"
     routeB = "/question02"
     page ="ThirdQuestion"
     labelQuestion = "Question number three is: When?"
     name="third"
    />
  )
}

export default FirstQuestion;
