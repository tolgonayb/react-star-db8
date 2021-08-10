import React, {useState} from 'react'
import Row from '../row'
import {PlanetDetails, PlanetList} from '../sw-components';



const PlanetsPage = () => {
	const [selectedId, setSelectedId] = useState(1);

	return (
		<Row
			left={<PlanetList selectId={(id) => {setSelectedId(id)}} />}
			right={<PlanetDetails itemId={selectedId} />}
		/>
	)
}


export default PlanetsPage
