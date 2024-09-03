import React, { useEffect, useState } from 'react'
import './Main.less'
import { useDispatch, useSelector } from 'react-redux'
import { getRepos } from '../actions/repos'
import Repo from './repo/Repo'
import { setCurrentPage } from '../../reducers/reposSlice'
import { createPage } from '../../utils/pageCounter'
import { useNavigate } from 'react-router-dom'
import repoImg from "../../img/repo.png"

const Main = () => {
	const dispatch = useDispatch()
	const repos = useSelector(state => state.repos.items)
	const isFetching = useSelector(state => state.repos.isFetching)
	const currentPage = useSelector(state => state.repos.currentPage)
	const totalCount = useSelector(state => state.repos.totalCount)
	const perPage = useSelector(state => state.repos.perPage)
	const isFetchError = useSelector(state => state.repos.isFetchError)
	const [searchValue, setSearchValue] = useState('')
	const navigate = useNavigate()
	const pageCount = Math.ceil(totalCount / perPage)
	const pages = []


	createPage(pages, pageCount, currentPage)

	useEffect(() => {
		dispatch(getRepos(searchValue, currentPage, perPage))
	}, [currentPage])


	// useEffect(() => {
	// if(isFetchError) {
	// 	navigate('/error')
	// }}, [isFetchError])

	function searchHandler() {
		dispatch(setCurrentPage(1))
		dispatch(getRepos(searchValue))
	}



	return (
		<div>
			{isFetchError &&
				<div class="alert alert-danger" role="alert">
					Произошла ошибка! Пожалуйста, обновите страницу!
				</div>
			}
			<div className="search">
				<div className="search-input-container">
					<img className="search-input-icon" src={repoImg} alt="repo-imp" />
					<input value={searchValue}
						onChange={(e) => setSearchValue(e.target.value)}
						type="text" placeholder="Enter repository name" className="search-input" />
				</div>
				<button onClick={() => searchHandler()} className="search-btn">Search</button>
			</div>
			{
				isFetching === false
					?

					<div>
						<div className="cards">
							{repos.map(repo =>
								<Repo repo={repo} key={repo.id} />
							)}
						</div>
						<div className="pages">
						{pages.map((page, index) =>
							<span key={index}
								className={currentPage == page ? "current-page" : "page"}
								onClick={() => dispatch(setCurrentPage(page))}>
								{page}
							</span>
						)}
						</div>
					</div>
					:
					<div className="fetching">
						<div className="loading-dots">
							<div className="dot"></div>
							<div className="dot"></div>
							<div className="dot"></div>
						</div>
					</div>
			}
			

		</div>
	)
}

export default Main
