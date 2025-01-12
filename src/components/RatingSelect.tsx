import { useState } from "react"

const RatingSelect = ({ select }: {select: (id: number) => void}) => {
	const [selected, setSelected] = useState(10);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSelected(+e.target.value)
		select(+e.target.value)
	}
	return (
		<ul className="rating">
			{new Array(10).fill(null).map((_, index) => (
				<li key={index + 1}>
					<input 
						type="radio"
						name="rating"
						id={`num${index + 1}`}
						value={index + 1}
						onChange={handleChange}
						checked={selected === index + 1}
					/>
					<label htmlFor={`num${index + 1}`}>{index + 1}</label>
				</li>
			))}
		</ul>
	)
}

export default RatingSelect