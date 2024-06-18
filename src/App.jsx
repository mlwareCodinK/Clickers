import { useState, useEffect } from 'react'
import './App.css'

const tg = window.Telegram.WebApp

function App() {
	const [count, setCount] = useState(Number(localStorage.getItem('coins')))

	useEffect(() => {
		tg.ready()
	})

	const handelCount = () => {
		setCount(count + 1)
		localStorage.setItem('coins', count)
	}

	return (
		<>
			<div className='container'>
				<h1 className='coins-title'>Просто жми!!!</h1>
				<div className='img'>
					<button className='btn-coins' onClick={handelCount}>
						<img src='/coins.png' alt='' />
					</button>
				</div>
				<div className='counter'>
					<h1>{localStorage.getItem('coins')} $</h1>
				</div>
			</div>
		</>
	)
}

export default App
