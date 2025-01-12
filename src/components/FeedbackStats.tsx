import { FeedbackItemProps } from "./FeedbackItem"

const FeedbackStats = ({ feedbacks }: { feedbacks: FeedbackItemProps[] }) => {
	const averateRating = feedbacks.reduce((acc, cur) => {
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