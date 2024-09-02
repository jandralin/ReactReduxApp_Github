import React from 'react'
import './Repo.less'
import { NavLink } from 'react-router-dom'
import starImg from '../../../img/star.png'

const Repo = (props) => {
	const repo = props.repo
	return (
		<div className='repo'>
			<div className="repo-top">
				<div className="repo-header">
					{/* <div className="repo-header-name"> */}
						<NavLink className="repo-header-name" to={`/card/${repo.owner.login}/${repo.name}`}>{repo.name}</NavLink>
					{/* </div> */}
					<div className="repo-header-stars">{repo.stargazers_count}
						<img src={starImg} alt="star" className='star-img'/>
					</div>
				</div>
				<div className="repo-last-commit">{repo.updated_at}</div>
			</div>
			<div>
				
				Ссылка на репозиторий:
				<a href={repo.html_url} className='repo-link'> {repo.html_url}</a>
			</div>
		</div>
	)
}

export default Repo
