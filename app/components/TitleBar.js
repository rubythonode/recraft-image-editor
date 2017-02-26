import React from 'react';
import WindowControls from './WindowControls';

class TitleBar extends React.Component {
	render () {
		return (
			<div className="full-width">
				<div className="pull-left">
					<WindowControls />
				</div>
				This is the titlebar
			</div>
		)
	}
}

export default TitleBar;