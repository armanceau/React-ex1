import './App.css';
import { Link, NavLink, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Single } from './page/Single';

const router = createBrowserRouter([
	{
		path: '/',
		element: 
			<div>
				Page d'accueil
				<nav>
					<NavLink to={"/blog"}>Blog</NavLink>
					<Link to={"/contact"}>Contact</Link>
				</nav>
			</div>,
	},
	{
		path: '/blog',
		element: 
			<div>
				Blog
				<nav>
					<Link to={"/"}>Accueil</Link>
					<Link to={"/contact"}>Contact</Link>
				</nav>
			</div>,
	},
	{
		path: '/contact',
		element:
		<div>
			Contact
			<nav>
				<Link to={"/"}>Accueil</Link>
				<Link to={"/blog"}>Blog</Link>
			</nav>
		</div>,
	},
	{
		path: '/blog/:id',
		element: <Single/>
	}
]);

function App() {
	return (
		<div>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
