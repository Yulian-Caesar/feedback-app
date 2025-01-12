import { useState } from 'react'
import './App.css';
import { Header } from './components/Header';
import { FeedbackData } from './data/FeedbackData'
import FeedbackList from './components/FeedbackList';
import { FeedbackItemProps } from './components/FeedbackItem';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
 
function App() {
    const [feedbacks, setFeedbacks] = useState(FeedbackData);

	const addFeedback = (newFeedback: FeedbackItemProps) => {
		setFeedbacks([newFeedback, ...feedbacks])
	}

	const deleteFeedback = (id: number) => {
		if(window.confirm('Are you sure you want to delete')) {
			setFeedbacks(feedbacks.filter((item: FeedbackItemProps) => item.id !== id))
		}
	}

    return (
        <>
            <Header text='Feedback app' />
            <div className="container">
				<FeedbackForm handleAdd={addFeedback} />
				<FeedbackStats feedbacks={feedbacks} />
                <FeedbackList feedbacks={feedbacks} handleDelete={deleteFeedback} />
            </div>
        </>
    )
}

export default App
