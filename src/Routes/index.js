import Home from './Home'
import User from './User'
import UserInfo from './User/info'
import About from './About'

import { get, list } from './../actions/user'

import Layout from './../layout/Layout'
import Layout3Columns from './../layout/Layout3Columns'

export default {
	defaultLayout: Layout,
	children: [
		{
			path: '/',
			component: Home
		},
		{
			path: '/about',
			component: About
		},
		{
			path: '/user',
			component: User,
			actions: {
				list
			},
			children: [
				{
					path: '/:id',
					component: UserInfo,
					actions: {
						get
					}
				}
			]
		}
	]
}
