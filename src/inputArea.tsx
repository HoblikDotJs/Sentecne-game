import React, { ChangeEvent, FC } from "react";
import { inputInterface } from "./types";
import { store } from "./store";

export const InputArea: FC<inputInterface> = ({ answer, index }): JSX.Element => {
    const keys = Object.keys(answer) as Array<keyof typeof answer>;
    const value = answer[keys[index]]
    const updateAnswer = (event: ChangeEvent<HTMLInputElement>) => {
        store.dispatch({ type: "CHANGE_ANSWER", payload: event.target.value, index })
    }

    return <div className="inputArea">
        <input id="inputField" onChange={updateAnswer} type="text" value={value} autoFocus />
    </div>
}