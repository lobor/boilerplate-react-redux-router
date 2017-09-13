import React from 'react'
import { router, navigate } from './../../store/'
import { Link, Row, Table, Box } from 'components';

export default class User extends React.Component {
	static keyState = [
		'user.users'
	]

	defaultProps = {
		users: []
	}

	componentWillMount() {
		this.props.list();
	}

	openUser(id) {
		router.dispatch(navigate('/user/'+id))
	}

	render () {
		return (
			<Row>
				<Box>
					<Table>
						<thead>
							<tr>
								<th>Id</th>
								<th>First Name</th>
								<th>Last Name</th>
							</tr>
						</thead>
						<tbody>
							{this.props.users.map((user, key) => {
								return (
									<tr key={key} onClick={() => { this.openUser(user.id) }}>
										<td>
											{user.id}
										</td>
										<td>
											{user.firstName}
										</td>
										<td>
											{user.lastName}
										</td>
									</tr>
								)
							})}
						</tbody>
					</Table>
				</Box>
			</Row>
		)
	}
}
