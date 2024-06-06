//import logo from './logo.svg';
import './App.css';
import { ListePersonnage } from './personnages/ListePersonnages';
import { personnage } from './personnages/Personnages';

function App() {
	return (
		<div>
			<ListePersonnage liste={personnage}/>
		</div>
	);
}

export default App;