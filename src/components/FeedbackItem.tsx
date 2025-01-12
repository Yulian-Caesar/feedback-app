import { useContext } from "react";
import Card from "./shared/Card";
import { FaTimes, FaEdit } from 'react-icons/fa'
import FeedbackContext, {Feedback, FeedbacksContextType} from "../context/FeedbackContext";


export const FeedbackItem = ({ feedback }: { feedback: Feedback}) => {
	const { deleteFeedback, editFeedback } = useContext(FeedbackContext) as FeedbacksContextType;

	return (
		<Card>
			<div className="num-display">{feedback.rating}</div>
			<button onClick={() => editFeedback(feedback)} className="edit">
				<FaEdit color='purple' />
			</button>
			<button onClick={() => deleteFeedback(feedback.id)} className="close">
				<FaTimes color='purple' />
			</button>
			<div className="text-display"> {feedback.text}</div>
		</Card>
	)
}
