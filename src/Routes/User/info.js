import React from 'react'
import { Input, Row, Box, Column } from 'components';

export default class UserInfo extends React.Component {
	componentWillMount() {
		this.props.get(parseInt(this.props.location.params.id, 10));
	}

	render () {
		var { lastName, firstName } = this.props.user
		return (
			<Row>
				<Column>
					<label htmlFor="firstName">First Name</label>
					<Input type="text" value={firstName} id="firstName" name="firstName"/>
				</Column>
				<Column>
					<label htmlFor="lastName">Last Name</label>
					<Input type="text" value={lastName} id="lastName" name="lastName"/>
				</Column>
			</Row>
		)
	}
}
