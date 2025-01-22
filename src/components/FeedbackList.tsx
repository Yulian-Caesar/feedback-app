import { useContext, useMemo } from "react";
import { FeedbackItem } from "./FeedbackItem";
import { motion, AnimatePresence } from 'framer-motion'
import FeedbackContext, { FeedbacksContextType } from "../context/FeedbackContext";
import Spinner from "./shared/Spinner";

const FeedbackList = () => {
	const { feedbacks, isLoading } = useContext(FeedbackContext) as FeedbacksContextType;

	const feedbackItems = useMemo(
		() =>
			feedbacks.map((feedback) => (
				<motion.div
					key={feedback.id}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
				>
					<FeedbackItem feedback={feedback} />
				</motion.div>
			)),
		[feedbacks]
	);


	if (isLoading) {
		return <Spinner />;
	}

	if (!feedbacks || feedbacks.length === 0) {
		return <p>No Feedback yet</p>;
	}

	return (
		<div className="feedback-list">
			<AnimatePresence>{feedbackItems}</AnimatePresence>
		</div>
	)
}

export default FeedbackList;