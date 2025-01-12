import Card from "./shared/Card";
import { FaTimes } from 'react-icons/fa'

export type FeedbackItemProps = {
	id: number | string;
	text: string;
	rating: number;
};

export const FeedbackItem = ({ feedback, handleDelete }: { feedback: FeedbackItemProps, handleDelete: (id: number | string) => void }) => {
	return (
		<Card>
			<div className="num-display">{feedback.rating}</div>
			<button onClick={() => handleDelete(feedback.id)} className="close">
				<FaTimes color='purple' />
			</button>
			<div className="text-display"> {feedback.text}</div>
		</Card>
	)
}
