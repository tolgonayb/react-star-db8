import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import Header from '../header';
import RandomPlanet from '../random-planet';
import {PeoplePage, PlanetsPage} from '../pages';
import {Provider, Consumer} from '../swapi-context/swapi-context';
import SwapiService from "../../services/swapi-service";

import './app.css';

const App = () => {
	return (
		<div>
			<Provider value={SwapiService}>

				<Router>
					<Header/>
					<RandomPlanet />

					<Route path='/people' component={PeoplePage} />
					<Route path='/planets' component={PlanetsPage} />

				</Router>

			</Provider>
		</div>
	);
};

export default App;
