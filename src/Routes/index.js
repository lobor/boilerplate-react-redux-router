import Home from './Home'
import Toto from './Toto'
import Titi from './Titi'

import { get } from './../actions/test'

import Layout from './../layout/Layout'
import Layout3Columns from './../layout/Layout3Columns'

export default {
	defaultLayout: Layout,
	children: [
		{
			path: '/',
			component: Home,
			actions: {
				get
			}
		},
		{
			layout: Layout3Columns,
			path: '/toto',
			component: Toto,
			children: [
				{
					path: '/:id',
					component: Titi,
					actions: {
						get
					}
				}
			]
		}
	]
}
