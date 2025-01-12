import { FaQuestion } from "react-icons/fa"
import { NavLink } from "react-router-dom"

const AboutIconLink = () => {
  return (
	<div className="about-link">
		<NavLink to="/about" className="about-link">
			<FaQuestion size={30} />
		</NavLink>
	</div>
  )
}

export default AboutIconLink