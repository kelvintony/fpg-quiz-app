import React, { useState } from 'react';
import { questions } from '../Data/questions';
import { Link, useNavigate } from 'react-router-dom';

const Quiz = () => {
	const [ currentQuestion, setCurrentQuestion ] = useState(0);
	const [ showScore, setShowScore ] = useState(false);
	const [ score, setScore ] = useState(0);
	const navigate = useNavigate();

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore((prevState) => prevState + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

	const handleRetakeTest = () => {
		setCurrentQuestion(0);
		setScore(0);
		setShowScore(false);
	};
	return (
		<div className='quiz-container'>
			<div className='quiz-container-a'>
				{showScore ? (
					<div className='score-section'>
						You scored {score} out of {questions.length} <br />
						{score >= 2 ? 'Congratulations you passed the test' : "sorry you didn't make it through"} {''}
						<button class='score-section-btn' to='/dashboard' onClick={handleRetakeTest}>
							Retake test
						</button>
					</div>
				) : (
					<div>
						<div className='question-section'>
							<div className='question-count'>
								<span>Question {currentQuestion + 1}</span>/{questions.length}
							</div>
							<div className='question-text'>{questions[currentQuestion].questionText}</div>
						</div>
						<div className='answer-section'>
							{questions[currentQuestion].answerOptions.map((answerOption) => (
								<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>
									{answerOption.answerText}
								</button>
							))}
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Quiz;
