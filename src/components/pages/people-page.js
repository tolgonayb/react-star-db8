import React, {useState} from 'react'
import Row from '../row'
import {PersonDetails, PeopleList} from '../sw-components';
import ErrorBoundary from "../error-boundary";


const PeoplePage = () => {
	const [selectedId, setSelectedId] = useState(1);

	return (
		<Row
			left={<PeopleList selectId={(id) => {setSelectedId(id)}} />}
			right={<PersonDetails itemId={selectedId} />}
		/>
	)
}


export default PeoplePage
