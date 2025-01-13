import { useContext } from "react";
import { FeedbackItem } from "./FeedbackItem";
import { motion, AnimatePresence } from 'framer-motion'
import FeedbackContext, { FeedbacksContextType } from "../context/FeedbackContext";
import Spinner from "./shared/Spinner";

const FeedbackList = () => {
	const { feedbacks, isLoading } = useContext(FeedbackContext) as FeedbacksContextType;
	
	if(!isLoading && (!feedbacks || feedbacks.length === 0)) {
		return <p>No Feedback yet</p>
	}

	return isLoading ? (
		<Spinner />
	) : (
		<div className="feedback-list">
			<AnimatePresence>
				{feedbacks.map((feedback) => (
					<motion.div
						key={feedback.id}
						initial={{opacity: 0}}
						animate={{opacity: 1}}
						exit={{opacity: 0}}
					>
						<FeedbackItem key={feedback.id} feedback={feedback} />
					</motion.div>
				))}
			</AnimatePresence>
		</div>
	)
}

export default FeedbackList