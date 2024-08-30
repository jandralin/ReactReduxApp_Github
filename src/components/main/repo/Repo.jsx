import React from 'react'
import './Repo.less'

const Repo = (props) => {
	const repo = props.repo
	return (
		<div className='repo'>
			<div className="repo-header">
				<div className="repo-header-name">{repo.name}</div>
				<div className="repo-header-stars">{repo.stargazers_count}</div>
			</div>
			<div className="repo-last-commit">{repo.iupdated_up}</div>
			<div>
				Ссылка на репозиторий:
				<a href={repo.html_url} className='repo-link'> {repo.html_url}</a>
				</div>
		</div>
	)
}

export default Repo
