import * as React from "react";
import * as ReactDOM from "react-dom";
import { hot } from 'react-hot-loader'

import './scss/main.scss';

const Main = () => <div>App</div>;
const App = hot(module)(Main);

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(<App />, document.querySelector('#app'))
});
