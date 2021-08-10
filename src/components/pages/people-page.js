import React, {useState} from 'react'
import {Redirect, withRouter} from "react-router-dom";
import Row from '../row'
import {PersonDetails, PeopleList} from '../sw-components';



const PeoplePage = ({selectedId, history}) => {
	const id = selectedId ? selectedId : 1

	return selectedId ? <h1>Choose another hero</h1> : <Redirect to='/people-page' />;


	return (
		<Row
			left={<PeopleList selectId={(id) => {history.push(id)}} />}
			right={<PersonDetails itemId={selectedId} />}
		/>
	)
}


export default withRouter(PeoplePage);
