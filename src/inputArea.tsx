import React, { ChangeEvent, FC } from "react";
import { useDispatch } from "react-redux";
import { InputInterface } from "./types";


export const InputArea: FC<InputInterface> = ({ answer, index }) => {
    const dispatch = useDispatch();
    const keys = Object.keys(answer) as Array<keyof typeof answer>;
    const value = answer[keys[index]]
    const updateAnswer = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: "CHANGE_ANSWER", payload: event.target.value, index })
    }

    return <div className="inputArea">
        <input id="inputField" onChange={updateAnswer} type="text" value={value} autoFocus />
    </div>
}