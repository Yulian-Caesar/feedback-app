import { NavLink } from "react-router-dom"
import Card from "../components/shared/Card"

const AboutPage = () => {
	return (
		<Card>
			<div className="about">
				<h1>About this project</h1>
				<p>This is React project to leave feedback for a product or service</p>
				<p>Version: 1.0.0</p>
				<p>
					<NavLink to='/'>Back To Home</NavLink>
				</p>
			</div>
		</Card>
	)
}

export default AboutPage