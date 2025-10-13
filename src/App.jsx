import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/header.jsx';



function App() {
	return (
		<>
		<div className="background"></div>
		<Header />
		<Outlet />
		<p></p>
		</>
	);
};



export default App;