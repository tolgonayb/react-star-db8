import React, {useState} from 'react'
import {withRouter} from "react-router-dom";
import Row from '../row'
import {PersonDetails, PeopleList} from '../sw-components';



const PeoplePage = ({selectedId, history}) => {
	const id = selectedId ? selectedId : 1

	return (
		<Row
			left={<PeopleList selectId={(id) => {history.push(id)}} />}
			right={<PersonDetails itemId={id} />}
		/>
	)
}

export default withRouter(PeoplePage);
