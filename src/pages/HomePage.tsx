import { FeedbackData } from '../data/FeedbackData'
import FeedbackList from '../components/FeedbackList';
import { FeedbackItemProps } from '../components/FeedbackItem';
import FeedbackStats from '../components/FeedbackStats';
import FeedbackForm from '../components/FeedbackForm';
import { useState } from 'react';
import AboutIconLink from '../components/AboutIconLink';

const HomePage = () => {
    const [feedbacks, setFeedbacks] = useState<FeedbackItemProps[]>(FeedbackData);

	const addFeedback = (newFeedback: FeedbackItemProps) => {
		setFeedbacks([newFeedback, ...feedbacks])
	}

	const deleteFeedback = (id: number | string) => {
		if(window.confirm('Are you sure you want to delete')) {
			setFeedbacks(feedbacks.filter((item: FeedbackItemProps) => item.id !== id))
		}
	}

	return (
		<>
			<FeedbackForm handleAdd={addFeedback} />
			<FeedbackStats feedbacks={feedbacks} />
			<FeedbackList feedbacks={feedbacks} handleDelete={deleteFeedback} />
			<AboutIconLink />
		</>
  )
}

export default HomePage