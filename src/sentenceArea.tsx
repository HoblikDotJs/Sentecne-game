import { FC } from "react";
import { sentenceInterface } from "./types";

export const SentenceArea: FC<sentenceInterface> = ({ answer }) => {
    const sentence = answer

    return <div className="sentenceArea">
        <p style={{ color: Object.values(sentence).indexOf("") === -1 ? "var(--completed)" : "var(--text)" }}>
            {sentence.who || <code>who?</code>} {sentence.what || <code>what?</code>} {sentence.where || <code>where?</code>} {sentence.when || <code>when?</code>}
            {Object.values(sentence).indexOf("") === -1 ? "!🎉" : ""}</p>
    </div>
}