import React from 'react'

import {
  H1,
  Box,
  Row,
  Column,
  Button,
  Input,
  Select,
	Textarea,
	Nav,
	Alert
} from 'components'

export default class Home extends React.Component{
	render() {
		return (
			<Column>
		    <H1>Hello</H1>
		    <Row>
		      <Column>
						<label htmlFor="email">Input Email</label>
		      	<Input type="email" id="email" name="toto" placeholder="dupont@ymail.com"/>
		      </Column>
		      <Column>
						<label htmlFor="textarea">Textarea</label>
		        <Textarea id="textarea" />
					</Column>
		      <Column>
						<label htmlFor="select">Select</label>
		        <Select id="select">
		          <option>Toto</option>
		        </Select>
					</Column>
		    </Row>
		    <Row left>
		      <Button>Cancel</Button>
		      <Button primary>Valider</Button>
		    </Row>
		    <Row>
		      <Box>Col 1</Box>
		      <Box>Col 2</Box>
		      <Box>Col 3</Box>
		    </Row>
		    <Alert>Alert</Alert>
		    <Alert warning>Alert warning</Alert>
		    <Alert error>Alert error</Alert>
		  </Column>
		)
	}
}
