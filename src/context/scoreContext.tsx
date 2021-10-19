import { useContext } from "react";
import { createContext, useState, useReducer } from "react";
import { Quize } from "../quize";
export type ScoreType = {
  state: {
    quizes: Quize[];
    quize: Quize;
    timer: number;
    score: number;
    questionNumber: number;
  };
  dispatch: React.Dispatch<Action>;
};
const ScoreContext = createContext<ScoreType>({
  state: {
    quizes: [],
    quize: {
      quizeName: " ",
      quizeImage: " ",
      questions: [],
    },
    timer: 10,
    score: 0,
    questionNumber: 0,
  },
  dispatch: () => {},
});

export function ScoreProvider({ children }: { children: any }) {
  const [state, dispatch] = useReducer(ScoreReducer, {
    quizes: [],

    quize: {
      quizeName: " ",
      quizeImage: " ",
      questions: [],
    },
    timer: 10,
    score: 0,
    questionNumber: 1,
  });
  return (
    <ScoreContext.Provider value={{ state, dispatch }}>
      {children}
    </ScoreContext.Provider>
  );
}

type Action =
  | { type: "RIGHT-ANSWER"; payload: number }
  | { type: "WRONG-ANSWER"; payload: number }
  | { type: "SET-QUIZES-DATA"; payload: Quize[] }
  | { type: "SELECT-QUIZE"; payload: Quize }
  | { type: "NEXT-QUESTION" }
  | { type: "TIMER" };
function ScoreReducer(
  state: {
    quizes: Quize[];
    quize: Quize;
    score: number;
    timer: number;
    questionNumber: number;
  },
  action: Action
): {
  quizes: Quize[];
  quize: Quize;
  score: number;
  timer: number;
  questionNumber: number;
} {
  switch (action.type) {
    case "SET-QUIZES-DATA":
      return {
        ...state,
        quizes: action.payload,
      };
    case "SELECT-QUIZE":
      return {
        ...state,
        timer: 10,
        score: 0,
        questionNumber: 1,
        quize: action.payload,
      };
    case "RIGHT-ANSWER":
      return {
        ...state,
        score: state.score + action.payload,
      };
    case "WRONG-ANSWER":
      return {
        ...state,
        score: state.score - action.payload,
      };
    case "NEXT-QUESTION":
      return {
        ...state,
        questionNumber: state.questionNumber + 1,
      };

    case "TIMER":
      return {
        ...state,
        questionNumber : state.questionNumber + 1
      };

    default:
      return state;
  }
}

export function useScore() {
  return useContext(ScoreContext);
}
