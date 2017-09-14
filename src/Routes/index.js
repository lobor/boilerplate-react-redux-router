import Home from './Home'
import User from './User'
import UserInfo from './User/info'
import About from './About'

import { page404 } from './Error'

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
			props: ['user.users'],
			actions: {
				list
			},
			children: [
				{
					path: '/:id',
					props: ['user.user'],
					component: UserInfo,
					actions: {
						get
					}
				}
			]
		}
	],
	error: {
		404: page404
	}
}
