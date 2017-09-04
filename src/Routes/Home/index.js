import React from 'react'

import {
  H1,
  Box,
  Row,
  Column,
  Button,
  Input,
  Select
} from 'components'

export default() => (
  <Column>
    <H1>Home salut</H1>
    <Row>
      <Box>
        <Input type="email" name="toto" placeholder="dupont@ymail.com"/>
      </Box>
      <Box>
        <Input type="text"/>
      </Box>
      <Box>
        <Select>
          <option>Toto</option>
        </Select>
      </Box>
    </Row>
    <Row>
			<Box>
	      <Button>Button</Button>
	      <Button primary>Button</Button>
			</Box>
    </Row>
    <Row>
      <Box>Col 1</Box>
      <Box>Col 2</Box>
      <Box>Col 3</Box>
    </Row>
  </Column>
)
