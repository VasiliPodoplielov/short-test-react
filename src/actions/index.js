export const checkAnswer = (answer) => {
    console.log(answer);
    return {
        type: 'check-answer',
        payload: answer
    }
}

export const changeInput = (answer) => {
    console.log(answer);
    return {
        type: 'change-input',
        payload: answer
    }
}