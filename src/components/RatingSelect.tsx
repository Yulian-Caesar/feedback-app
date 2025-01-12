import { useContext, useEffect, useState } from "react"
import FeedbackContext, { FeedbacksContextType } from "../context/FeedbackContext";

const RatingSelect = ({ select }: {select: (id: number) => void}) => {
	const { feedbackEdit } = useContext(FeedbackContext) as FeedbacksContextType;
	const [selected, setSelected] = useState(feedbackEdit.item.rating);

	useEffect(() => {
		if(feedbackEdit.item.rating) {
			setSelected(feedbackEdit.item.rating)
		}
	}, [feedbackEdit])

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSelected(+e.target.value)
		select(+e.target.value)
	}
	return (
		<ul className="rating">
			{new Array(10).fill(null).map((_, index) => (
				<li key={index + 1}>
					<input 
						type="radio"
						name="rating"
						id={`num${index + 1}`}
						value={index + 1}
						onChange={handleChange}
						checked={selected === index + 1}
					/>
					<label htmlFor={`num${index + 1}`}>{index + 1}</label>
				</li>
			))}
		</ul>
	)
}

export default RatingSelect