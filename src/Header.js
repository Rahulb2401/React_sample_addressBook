import React, { Fragment} from 'react';
import './Header.css';
import { downloadLoactionData, useLocationDetail } from './customHook';

const Header = function (props) {

    const locationDetail = useLocationDetail()

    const { city, region, country } = locationDetail;



    return (
        <Fragment>
            <div className="header">
                <h1> {props.heading}</h1>
            </div>
            <h4> &nbsp;Welcome user, You are from {city} - {region}, {country}</h4>
        </Fragment>
    )
}



export default Header;