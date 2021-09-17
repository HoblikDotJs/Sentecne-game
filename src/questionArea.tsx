import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { QuestionInterface } from "./types";

const QUESTIONS = ["Who?", "What?", "Where?", "When?"]

export const QuestionArea: FC<QuestionInterface> = ({ answer, index }) => {
    const dispatch = useDispatch();
    const focusInput = () => {
        document.getElementById("inputField")?.focus() //Ref forwarding?
    }
    const decreaseIndex = () => {
        dispatch({ type: "DECREMENT" })
        focusInput()
    }
    const increaseIndex = () => {
        dispatch({ type: "INCREMENT" })
        focusInput()
    }
    const keys = Object.keys(answer) as Array<keyof typeof answer>
    let color = answer[(keys[index])] ? "var(--text)" : "var(--uncompleted)"

    return <div className="questionArea">
        <button style={{ opacity: index > 0 ? 1 : 0, color: "var(--text)" }} onClick={decreaseIndex}>◄</button>
        <p style={{ display: "inline", color }}>{QUESTIONS[index]}</p>
        <button style={{ opacity: index < 3 ? 1 : 0, color: "var(--text)" }} onClick={increaseIndex}>►</button>
    </div>
}
