import { useContext, useEffect, useState, useCallback, useMemo } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext, { FeedbacksContextType } from "../context/FeedbackContext";

const FeedbackForm = () => {
	const [text, setText] = useState("");
	const [rating, setRating] = useState(10);
	const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext) as FeedbacksContextType;

	const message = useMemo(() => {
		if (!text) return null;
		if (text.trim().length <= 10) return "Text must be at least 10 characters";
		return "";
	}, [text]);

	const isBtnDisabled = useMemo(() => !text || text.trim().length <= 10, [text]);

	useEffect(() => {
		if (feedbackEdit.edit) {
			setText(feedbackEdit.item.text);
			setRating(feedbackEdit.item.rating);
		}
	}, [feedbackEdit]);

	const handleTextChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		setText(e.target.value);
	}, []);

	const handleRatingChange = useCallback((newRating: number) => {
		setRating(newRating);
	}, []);

	const handleFormSubmit = useCallback(
		(e: React.FormEvent<HTMLFormElement>) => {
			e.preventDefault();

			const newFeedback = { text, rating };

			if (feedbackEdit.edit) {
				updateFeedback(feedbackEdit.item.id, newFeedback);
			} else {
				addFeedback(newFeedback);
			}

			setText("");
			setRating(10);
		},
		[addFeedback, feedbackEdit, rating, text, updateFeedback]
	);

	return (
		<Card>
			<form onSubmit={handleFormSubmit}>
				<h2>How would you rate your service with us?</h2>
				<RatingSelect select={handleRatingChange} />
				<div className="input-group">
					<input
						value={text}
						onChange={handleTextChange}
						type="text"
						placeholder="Write a review"
					/>
					<Button type="submit" isDisabled={isBtnDisabled}>
						Send
					</Button>
				</div>
				{message && <div className="message">{message}</div>}
			</form>
		</Card>
	);
};

export default FeedbackForm;