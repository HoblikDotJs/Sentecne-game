import React, { FC } from "react";
import { questionInterface } from "./types";
import { store } from "./store";

const QUESTIONS = ["Who?", "What?", "Where?", "When?"]

export const QuestionArea: FC<questionInterface> = ({ answer, index }) => {
    const focusInput = () => {
        document.getElementById("inputField")?.focus()
    }
    const decreaseIndex = () => {
        store.dispatch({ type: "DECREMENT" })
        focusInput()
    }
    const increaseIndex = () => {
        store.dispatch({ type: "INCREMENT" })
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
