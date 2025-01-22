import { createContext, ReactNode, useEffect, useState } from "react";

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
	isLoading: boolean,
	deleteFeedback: (id: Feedback['id']) => void,
	addFeedback: (newFeedback: Pick<Feedback, 'text' | 'rating'>) => void,
	editFeedback: (editFeedback: Feedback) => void,
	updateFeedback: (id: Feedback['id'], updFeedback: Pick<Feedback, 'text' | 'rating'>) => void
}


const FeedbackContext = createContext<FeedbacksContextType | null>(null);

export const FeedbackProvider = ({ children }: {children: ReactNode}) => {
	const [isLoading, setIsLoading] = useState(true);
	const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
	const [feedbackEdit, setFeedbackEdit] = useState({
		item: {} as Feedback,
		edit: false
	})

	useEffect(() => {
		fetchFeedbacks()
	}, [])

	const fetchFeedbacks = async () => {
		try{
			const res = await fetch(`api/feedbacks?_sort=id&_order=desc`)
			const data = await res.json();
			setFeedbacks(data);
		} catch(e) {
			console.log(e)
		}
		setIsLoading(false)
	}

	const addFeedback = async (newFeedback: Pick<Feedback, 'text' | 'rating'>) => {
		const res = await fetch('api/feedbacks', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(newFeedback)
		})
		const data = await res.json();
		setFeedbacks([data, ...feedbacks])
	}

	const updateFeedback = async (id: Feedback['id'], updFeedback: Pick<Feedback, 'text' | 'rating'>) => {
		const res = await fetch(`api/feedbacks/${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(updFeedback)
		})
		const data = await res.json();
		setFeedbacks(feedbacks.map(item => item.id === id ? {...item, ...data} : item))
	}

	const deleteFeedback = async (id: Feedback['id']) => {
		if(window.confirm('Are you sure you want to delete')) {
			await fetch(`api/feedbacks/${id}`, { method: 'DELETE' })
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
			isLoading,
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