import React from 'react'
import './App.less'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Main from './main/Main'
import Card from './card/Card'
import Error from './main/Error'


const App = () => {
	const dispatch = useDispatch()



	return (
		<BrowserRouter>
			<div className='container'>
				<Routes>
						<Route path="/" element={<Main />} />
						<Route path="/card/:username/:repoName" element={<Card />} />
						<Route path="/error" element={<Error />} />
						<Route path="*" element={<Navigate to="/" replace />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
};

export default App;
