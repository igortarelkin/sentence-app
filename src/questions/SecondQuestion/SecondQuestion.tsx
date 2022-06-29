import React from 'react'
import QuestionComponent from '../../components/QuestionComponent'

export const FirstQuestion = () => {
  return (
    <QuestionComponent
     routeN = "/question03"
     routeB = "/question01"
     page ="SecondQuestion"
     labelQuestion = "Question number two is: What?"
     name="second"
    />
  )
}

export default FirstQuestion;

