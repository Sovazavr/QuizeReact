

export const Game = ({ question, onClickVariant, step, questions }) => {
    const percentage = Math.round(step / questions.length * 100)

    return (
        <>
            <div className="progress">
                <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
            </div>
            <h1>{question.title}</h1>
            <ul>
                {question.variants.map((e, index) => {
                    return <li ket={e} onClick={() => onClickVariant(index)}>{e}</li>
                })}
                {/* <li>{question.variants[0]}</li>
          <li>{question.variants[1]}</li>
          <li>{question.variants[2]}</li> */}
            </ul>
        </>
    );
}