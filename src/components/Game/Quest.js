import "../../index.scss"
import { Game } from "./Game"
import { Result } from "./Result"


export const Quest = ({question, questions, onClickVariant, correct, step}) => {
    return (
        <div className='wrapQuest'>
            {step !== questions.length
                ? <Game question={question} onClickVariant={onClickVariant} step={step} questions={questions} />
                : < Result correct={correct} questions={questions} />
            }
        </div>
    )
}