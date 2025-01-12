import { NavLink } from "react-router-dom"

type HeaderProps = {
    text?: string
}

export const Header = ({text = 'Default value'} : HeaderProps) => {
  return (
    <header>
        <div className="container">
			<NavLink to="/">
				{text}
			</NavLink>
        </div>
    </header>
  )
}
