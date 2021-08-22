import { FC } from "react";
import { sentenceInterface } from "./types";

export const SentenceArea: FC<sentenceInterface> = ({ answer }) => {
    const sentence = answer
    let finished = false
    if (Object.values(sentence).indexOf("") === -1) {
        finished = true
    }
    return <div className="sentenceArea">
        <p style={{ color: finished ? "var(--completed)" : "var(--text)" }}>
            {sentence.who || <code>who?</code>} {sentence.what || <code>what?</code>} {sentence.where || <code>where?</code>} {sentence.when || <code>when?</code>}
            {finished ? "!🎉" : ""}</p>
    </div>
}