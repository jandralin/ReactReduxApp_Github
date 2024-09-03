import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { getContributors, getCurrentRepo } from '../actions/repos';
import './Card.less'
import { useSelector } from 'react-redux';
import { ReactComponent as BtnBack} from '../../img/back-btn.svg'
import starImg from '../../img/star.png'

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
					<div className='card-container'>
						<button
							className='back-btn'
							onClick={() => navigate(-1)}>
								 <BtnBack className='btn-img' />
						</button>
						<div className="card-container-body">
							<div className="card">
								<div className="card-top">
									<img className='avatar-img' src={repo.owner?.avatar_url} alt="" />
									<div className="stars">{repo.stargazers_count}
									<img src={starImg} alt="star" className='star-img'/>
									</div>
								</div>
								<div className="name">{repoName}</div>
								<div className="repo-last-commit">Last commit {repo.updated_at}</div>
							</div>
							<div className="contributors">Contributors: 
							<div>
							{contributors.map((contr, index) =>
								<div key={index} className="">
									{index + 1}. {contr.login}
								</div>
							)}</div>
							</div>
						</div>
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
