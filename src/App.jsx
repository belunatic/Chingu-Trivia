import axios from "axios";
import { useEffect, useState } from "react";
import QuestionLayout from "./QuestionLayout";
import "./style.css";

const App = () => {
	const [question, setQuestion] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		//fetching the questions
		const fetchQuestion = async () => {
			try {
				const res = await axios.get(
					"https://johnmeade-webdev.github.io/chingu_quiz_api/trial.json"
				);
				setQuestion(res.data);
				setLoading(false);
			} catch (err) {
				console.log("This error happen", err);
			}
		};

		fetchQuestion();
	}, []);

	return (
		<div>
			{loading ? <p>Fetching...</p> : <QuestionLayout question={question} />}
		</div>
	);
};

export default App;
