import { ReactNode } from "react"

type ButtonProps = {
	children: ReactNode,
	version?: 'primary' | 'secondary',
	type?: 'button' | 'submit' | 'reset',
	isDisabled?: boolean
}

const Button = ({children, version = 'primary', type = 'button', isDisabled = false}: ButtonProps) => {
  return (
	<button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
		{children}
	</button>
  )
}

export default Button