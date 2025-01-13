import { useContext, useEffect, useState } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext, { FeedbacksContextType } from "../context/FeedbackContext";


const FeedbackForm = () => {
	const [text, setText] = useState('');
	const [rating, setRating] = useState(10);
	const [btnDisabled, setBtnDisabled] = useState(true);
	const [message, setMessage] = useState<string | null>(null);
	const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext) as FeedbacksContextType;

	useEffect(() => {
		if(feedbackEdit.edit) {
			setText(feedbackEdit.item.text)
			setRating(feedbackEdit.item.rating)
			setBtnDisabled(false)
		}
	}, [feedbackEdit])

	const handleTextChnage = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;

		if(!value) {
			setBtnDisabled(true)
			setMessage(null)
		} else if (value !== '' && value.trim().length <= 10) {
			setBtnDisabled(true)
			setMessage('Text must be at least 10 characters')
		} else {
			setBtnDisabled(false)
			setMessage('')
		}

		setText(value);
	}

	const handleRatingChange = (rating: number) => {
		setRating(rating)
	}

	const handelFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const newFeedback = {
			text,
			rating
		}
		if(feedbackEdit.edit) {
			updateFeedback(feedbackEdit.item.id, newFeedback)
		} else {
			addFeedback(newFeedback);
		}
		setText('')
	}

	return (
		<Card>
			<form onSubmit={handelFormSubmit}>
				<h2>How would you rate your service with us?</h2>
				<RatingSelect select={handleRatingChange} />
				<div className="input-group">
					<input value={text} onChange={handleTextChnage} type="text" placeholder="Write a review" />
					<Button type="submit" isDisabled={btnDisabled}>Send</Button>
				</div>
				{message && <div className="message">{message}</div>}
			</form>
		</Card>
	)
}

export default FeedbackForm