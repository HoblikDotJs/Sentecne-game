export interface Action {
  type: "DECREMENT" | "INCREMENT" | "CHANGE_ANSWER";
  payload?: string;
  index?: 0 | 1 | 2 | 3;
}

type answer = {
  who: string;
  what: string;
  where: string;
  when: string;
};

export interface stateInterface {
  index: 0 | 1 | 2 | 3;
  answer: answer;
}

export interface questionInterface {
  index: 0 | 1 | 2 | 3;
  answer: answer;
}

export interface inputInterface {
  index: 0 | 1 | 2 | 3;
  answer: answer;
}

export interface sentenceInterface {
  answer: answer;
}
