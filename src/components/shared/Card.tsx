import { ReactNode } from "react"

type CardProps = {
	children: ReactNode,
	reverse?: boolean
}

const Card = ({children, reverse}: CardProps) => {
	return (
		<div className={`card ${reverse && 'reverse'}`}>{children}</div>
	)
}

export default Card