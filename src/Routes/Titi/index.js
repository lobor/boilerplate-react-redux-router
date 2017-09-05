import React from 'react'

export default class Titi extends React.Component{
	click = () => {
		this.props.get('titi');
	}
	
	render(){
		return (
			<div>
				<button onClick={this.click}>change title home</button>
			</div>
		);
	}
}
