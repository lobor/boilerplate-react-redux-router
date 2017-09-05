import Home from './Home'
import Toto from './Toto'
import Titi from './Titi'

import { get } from './../actions/test'

export default [
	{
		path: '/',
		component: Home,
		actions: {
			get
		}
	},
	{
		path: '/toto',
		component: Toto
	},
	{
		path: '/toto/:id',
		component: Titi,
		actions: {
			get
		}
	}
]
