import { useState } from "react";
import QuestionDisplay from "./QuestionDisplay";

const QuestionLayout = (props) => {
	const [currentNumber, setCurrentNumber] = useState(1); //keep track of question answered
	const [currentQuestion, setCurrentQuestion] = useState(() =>
		Math.floor(Math.random() * 41)
	);
	const [resultMessage, setResultMessage] = useState(""); // display result message
	const [score, setScore] = useState(0); //keep track of score

	//pick a random question
	const randomQuestion = () => Math.floor(Math.random() * 41);

	//compare the choice and the answer
	const checkAnswer = (choice) => {
		console.log(choice, props.question[currentQuestion].answer);
		if (choice === props.question[currentQuestion].answer) {
			setResultMessage("Well Done, Correct");
			setScore((prevState) => prevState + 1);
		}

		if (choice !== props.question[currentQuestion].answer) {
			setResultMessage("Sorry, You Got It Wrong");
		}
	};

	//move to next question
	const nextQuestion = () => {
		setCurrentNumber((prevState) => prevState + 1); //move to the next question
		setResultMessage(false); //hide results
		setCurrentQuestion(randomQuestion());
	};
	// console.log(props.question[currentQuestion]);

	//reset the game
	const reset = () => {
		setCurrentNumber(0);
		setResultMessage(false);
		setCurrentQuestion(randomQuestion());
	};
	return (
		<>
			{currentNumber < 10 ? (
				<QuestionDisplay
					currentNumber={currentNumber}
					question={props.question}
					checkAnswer={checkAnswer}
					nextQuestion={nextQuestion}
					resultMessage={resultMessage}
					currentQuestion={currentQuestion}
				/>
			) : (
				<>
					<h2>Your Score is {(score / 10) * 100}%</h2>
					<div>
						<button type="button" onClick={reset}>
							Do It Again
						</button>
					</div>
				</>
			)}
		</>
	);
};

export default QuestionLayout;
