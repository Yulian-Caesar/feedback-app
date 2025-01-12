import { useContext } from "react";
import FeedbackContext, { FeedbacksContextType } from "../context/FeedbackContext";

const FeedbackStats = () => {
	const { feedbacks } = useContext(FeedbackContext) as FeedbacksContextType;

	const averateRating = feedbacks.reduce((acc: number, cur ) => {
		return acc + cur.rating
	}, 0) / feedbacks.length;

	return (
		<div className="feedback-stats">
			<h4>{feedbacks.length} Reviews</h4>
			<h4>Average rating: {isNaN(averateRating) ? 0 : averateRating.toFixed(1)}</h4>
		</div>
	)
}

export default FeedbackStats