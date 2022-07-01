export const ANSWER_WHO = "ANSWER_WHO";
export const ANSWER_WHAT = "ANSWER_WHAT";
export const ANSWER_WHEN = "ANSWER_WHEN";
export const ANSWER_WHERE = "ANSWER_WHERE";

const initialState = {
  answer: {
    who: "",
    what: "",
    when: "",
    where: "",
  },
  answerState: {
    state: "not answered",
  },
};

export const AnswerReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ANSWER_WHO: {
      return {
        ...state,
        answer: { ...state.answer, who: action.payload },
        answerState: { ...state.answerState, state: action.payload },
      };
    }
    case ANSWER_WHAT: {
      return {
        ...state,
        answer: { ...state.answer, what: action.payload },
        answerState: { ...state.answerState, state: action.payload },
      };
    }
    case ANSWER_WHEN: {
      return {
        ...state,
        answer: { ...state.answer, when: action.payload },
        answerState: { ...state.answerState, state: action.payload },
      };
    }
    case ANSWER_WHERE: {
      return {
        ...state,
        answer: { ...state.answer, where: action.payload },
        answerState: { ...state.answerState, state: action.payload },
      };
    }
    default:
      return state;
  }
};

export function setAnswerWho(payload: { answer: string; answerState: string }) {
  return { type: ANSWER_WHO, payload };
}
export function setAnswerWhat(payload: {
  answer: string;
  answerState: string;
}) {
  return { type: ANSWER_WHAT, payload };
}
export function setAnswerWhen(payload: {
  answer: string;
  answerState: string;
}) {
  return { type: ANSWER_WHEN, payload };
}
export function setAnswerWhere(payload: {
  answer: string;
  answerState: string;
}) {
  return { type: ANSWER_WHERE, payload };
}
