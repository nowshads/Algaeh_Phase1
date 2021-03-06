import React from "react";
import ReactDOM from "react-dom";
import {render} from "react-dom";
import {Provider} from "react-redux";
import reducers from "./reducers/index.js";
import logger from "redux-logger";
import routes from "./routes.js";
import thunk from "redux-thunk";
//actions 

import {applyMiddleware,  createStore} from "redux";

const middleware = applyMiddleware(thunk, logger);

//const persistedState = localStorage.getItem("reduxState")  ? JSON.parse(localStorage.getItem("reduxState")) : {};
const store = createStore(reducers, middleware);

// const store = createStore((state, action) => {
// 	return state;
// }, middleware);


class App extends React.Component {
	render() {
		return (
		<Provider store={store}>
			{routes}
		</Provider>);
	}
};

render(
	<App />, document.getElementById("container")
);

// render(
// 	<Provider store={store}>
// 		{routes}
// 	</Provider>, document.getElementById("container"));


