//import logo from './logo.svg';
import './App.css';
import { ListePersonnage } from './personnages/ListePersonnages';
import { personnage } from './personnages/Personnages';
import { Navigation } from './navigation/Navigation';
import { Outlet } from 'react-router-dom';

function App() {
	return (
		<div>
			<Navigation/>
			<hr></hr>
			<Outlet/>
			<hr></hr>
			<ListePersonnage liste={personnage}/>
		</div>
	);
}

export default App;