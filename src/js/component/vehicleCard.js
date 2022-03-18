import PropTypes from "prop-types";
import React, { Component } from "react";
import { Link } from "react-router-dom";


export const VehicleCard  = (props) => {
	return(
                    <div className="VehicleCard" >
                        {/* <img src="..." className="VehicleCard-img-top" alt="...">  */}
                        <div className="VehicleCard-body">
                            <h5 className="VehicleCard-title">{props.data.name}</h5>
                            <p className="VehicleCard-text">Model: {props.data.model}</p>
                            <p className="VehicleCard-text">Vehicle-Class: {props.data.vehicle_class}</p>
                            <Link to={`/single/vehicles/${props.id}`}>
                            <button href="#" className="btn btn-primary">Learn more!</button>
                            </Link>
                        </div>
                    </div>              
    )
    
    };

    VehicleCard.propTypes ={
        data : PropTypes.object,
        id: PropTypes.integer
    }

    
