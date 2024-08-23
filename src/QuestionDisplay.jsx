const QuestionDisplay = (props) => {
	return (
		<>
			<p>{props.currentNumber} / 10 </p>
			<h2>{props.question[props.currentQuestion].question}</h2>
			<div>
				<button type="button" onClick={() => props.checkAnswer("a")}>
					{props.question[props.currentQuestion].choices.a}
				</button>
				<button type="button" onClick={() => props.checkAnswer("b")}>
					{props.question[props.currentQuestion].choices.b}
				</button>
				{!props.question[props.currentQuestion].choices.c ? (
					""
				) : (
					<button type="button" onClick={() => props.checkAnswer("c")}>
						{props.question[props.currentQuestion].choices.c}
					</button>
				)}
				{!props.question[props.currentQuestion].choices.c ? (
					""
				) : (
					<button type="button" onClick={() => props.checkAnswer("d")}>
						{props.question[props.currentQuestion].choices.d}
					</button>
				)}
			</div>
			{!props.resultMessage ? (
				""
			) : (
				<div>
					<p>{props.resultMessage}</p>
					<button type="button" onClick={props.nextQuestion}>
						Next
					</button>
				</div>
			)}
		</>
	);
};

export default QuestionDisplay;
