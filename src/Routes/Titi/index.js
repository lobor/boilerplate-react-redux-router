import React from 'react'

export default class Titi extends React.Component{
	click = () => {
		console.log(this.props);
		this.props.get('titi');
	}

	render(){
		return (
			<button onClick={this.click}>change title home</button>
		);
	}
}
