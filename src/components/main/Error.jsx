import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
	const navigate = useNavigate()
	return (
		<div>
			ERROR
			<button onClick={()=> navigate('/')}
			>GO TO MAIN PAGE</button>
		</div>
	)
}

export default Error
