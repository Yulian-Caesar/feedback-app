import { createContext, ReactNode, useState } from "react";

export type Feedback = {
	id: string | number,
	text: string,
	rating: number
}

export type FeedbacksContextType = {
	feedbacks: Feedback[],
	feedbackEdit: {
		item: Feedback,
		edit: boolean
	},
	deleteFeedback: (id: Feedback['id']) => void,
	addFeedback: (newFeedback: Feedback) => void,
	editFeedback: (editFeedback: Feedback) => void,
	updateFeedback: (id: Feedback['id'], updFeedback: Pick<Feedback, 'text' | 'rating'>) => void
}

const FeedbackData = [
	{
		id: 1,
		rating: 10,
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
	},
	{
		id: 2,
		rating: 9,
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
	},
	{
		id: 3,
		rating: 8,
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
	},
]

const FeedbackContext = createContext<FeedbacksContextType | null>(null);

export const FeedbackProvider = ({ children }: {children: ReactNode}) => {
	const [feedbacks, setFeedbacks] = useState<Feedback[]>(FeedbackData);
	const [feedbackEdit, setFeedbackEdit] = useState({
		item: {} as Feedback,
		edit: false
	})

	const addFeedback = (newFeedback: Feedback) => {
		setFeedbacks([newFeedback, ...feedbacks])
	}

	const updateFeedback = (id: Feedback['id'], updFeedback: Pick<Feedback, 'text' | 'rating'>) => {
		setFeedbacks(feedbacks.map(item => item.id === id ? {...item, ...updFeedback} : item))
	}

	const deleteFeedback = (id: Feedback['id']) => {
		if(window.confirm('Are you sure you want to delete')) {
			setFeedbacks(feedbacks.filter((item) => item.id !== id))
		}
	}

	const editFeedback = (editFeedback: Feedback) => {
		setFeedbackEdit({
			item: editFeedback,
			edit: true
		})
	}

	return (
		<FeedbackContext.Provider value={{
			feedbacks,
			feedbackEdit,
			deleteFeedback,
			addFeedback,
			editFeedback,
			updateFeedback
		}}>
			{children}
		</FeedbackContext.Provider>
	)
}

export default FeedbackContext;