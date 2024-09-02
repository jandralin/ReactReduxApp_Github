import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { getContributors, getCurrentRepo } from '../actions/repos';
import './Card.less'
import { useSelector } from 'react-redux';

const Card = () => {
	const navigate = useNavigate();
	const isFetching = useSelector(state => state.repos.isFetching)
	const { username, repoName } = useParams()
	const [repo, setRepo] = useState({ owner: {} })
	const [contributors, setContributors] = useState([])

	useEffect(() => {
		getCurrentRepo(username, repoName, setRepo)
		getContributors(username, repoName, setContributors)
	}, [])


	return (
		<div>
			{
				isFetching === false
					?
			<div>
				<button
					className='back-btn'
					onClick={() => navigate(-1)}>
					BACK
				</button>
				<div className="card">
					<img src={repo.owner?.avatar_url} alt="" />
					<div className="name">{repoName}</div>
					<div className="stars">{repo.stargazers_count}t</div>
				</div>
				{contributors.map((contr, index) =>
					<div key={index} className="">
						{index + 1}. {contr.login}
					</div>
				)}
			</div>
			:
			<div className="fetching">
						<div className="loading-dots">
							<div className="dot"></div>
							<div className="dot"></div>
							<div className="dot"></div>
						</div>
					</div>}
		</div>
	)
}

export default Card
