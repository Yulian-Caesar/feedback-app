import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import Card from "./shared/Card"
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import { FeedbackItemProps } from "./FeedbackItem";


const FeedbackForm = ({handleAdd}: {handleAdd: (item: FeedbackItemProps) => void}) => {
	const [text, setText] = useState('');
	const [rating, setRating] = useState(10);
	const [btnDisabled, setBtnDisabled] = useState(true);
	const [message, setMessage] = useState<string | null>(null);

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
			rating,
			id: uuidv4()
		}
		handleAdd(newFeedback);
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