import React from "react";
import {
	BrowserRouter,
	Switch,
	Route,
	Redirect,
	HashRouter,
	ReactRouter
} from "react-router-dom";

import RegistrationPatient from "./components/RegistrationPatient/RegistrationPatient.js";
import OPBilling from "./components/OPBilling/OPBilling.js";
import Login from "./components/Login/Login.js";
const appRoutes = [
	{
		path: "/",
		isExactPath: true,
		component: <RegistrationPatient />
	}
];
console.log("Came to routs...");
const routes = (
	<HashRouter>
		<Switch>
			{appRoutes.map((routeItem, idx) => {
				return <Route
					key={routeItem.path}
					path={routeItem.path}
					exact={routeItem.isExactPath}
					render={(params) => {
						return routeItem.component;
					}}
				/>;
			})}
		</Switch>
	</HashRouter>
);

export default routes;