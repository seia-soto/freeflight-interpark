import React from 'react';
import ReactDOM from 'react-dom';
import {RecoilRoot} from 'recoil';
import {App} from './app';

function Entrypoint() {
	return (
		<React.StrictMode>
			<RecoilRoot>
				<App />
			</RecoilRoot>
		</React.StrictMode>
	);
}

ReactDOM.render(<Entrypoint />, document.querySelector('div#root'));
