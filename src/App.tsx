import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
 
function App() {
    return (
        <BrowserRouter>
			<Header text='Feedback app' />
			<div className="container">
				<Routes>
					<Route path='/' element={<HomePage  />} />
					<Route path='/about' element={<AboutPage />} />
				</Routes>
			</div>
        </BrowserRouter>
    )
}

export default App
