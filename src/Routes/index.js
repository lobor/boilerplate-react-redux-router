import Home from './Home'
import Toto from './Toto'
import Titi from './Titi'

export default [
	{
		path: '/',
		component: Home
	},
	{
		path: '/toto',
		component: Toto
	},
	{
		path: '/toto/:id',
		component: Titi
	}
]
