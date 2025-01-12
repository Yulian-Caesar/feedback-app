import FeedbackList from '../components/FeedbackList';
import FeedbackStats from '../components/FeedbackStats';
import FeedbackForm from '../components/FeedbackForm';
import AboutIconLink from '../components/AboutIconLink';

const HomePage = () => {
	return (
		<>
			<FeedbackForm />
			<FeedbackStats />
			<FeedbackList />
			<AboutIconLink />
		</>
  )
}

export default HomePage