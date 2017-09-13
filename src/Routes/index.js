import Home from './Home'
import User from './User'
import About from './About'

import { get, list } from './../actions/user'

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
			path: '/about',
			component: About
		},
		{
			path: '/user',
			component: User,
			children: [
				{
					path: '/:id',
					component: User,
					actions: {
						get,
						list
					}
				}
			]
		}
	]
}
