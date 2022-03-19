import PropTypes from "prop-types";
import React, { Component } from "react";
import { Link } from "react-router-dom";


export const VehicleCard  = (props) => {
	return(
                    <div className="fullCard" >
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHnr3avebwcV911YoWbSC0l8HwMo59SwE7CA&usqp=CAU" className="CharacterCard-img-top" alt="..."/> 
                        <div className="VehicleCard-body">
                            <h5 className="Card-title">{props.data.name}</h5>
                            <p className="Card-text">Model: {props.data.model}</p>
                            <p className="Card-text">Vehicle-Class: {props.data.vehicle_class}</p>
                            <Link to={`/single/vehicles/${props.id}`}>
                            <button href="#" className="btn btn-outline-primary">Learn more!</button>
                            </Link>
                        </div>
                    </div>              
    )
    
    };

    VehicleCard.propTypes ={
        data : PropTypes.object,
        id: PropTypes.integer
    }

    
