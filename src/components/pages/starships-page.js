import React from 'react'
import {withRouter} from "react-router-dom";
import {StarshipList} from '../sw-components';



const StarshipsPage = ({history}) => {

    const localRedirect = (id) => {
        history.push(id)
    }

    return (
        <StarshipList selectedId={(id) => {localRedirect(id)}} />
    )
}

export default withRouter(StarshipsPage);
