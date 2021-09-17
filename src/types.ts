export interface Action {
  type: "DECREMENT" | "INCREMENT" | "CHANGE_ANSWER";
  payload?: string;
  index?: 0 | 1 | 2 | 3;
}

type Answer = {
  who: string;
  what: string;
  where: string;
  when: string;
};

export interface StateInterface {
  index: 0 | 1 | 2 | 3;
  answer: Answer;
}

export interface QuestionInterface {
  index: 0 | 1 | 2 | 3;
  answer: Answer;
}

export interface InputInterface {
  index: 0 | 1 | 2 | 3;
  answer: Answer;
}

export interface sentenceInterface {
  answer: Answer;
}
