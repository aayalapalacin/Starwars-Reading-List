import PropTypes from "prop-types";
import React, { Component } from "react";
import { Link } from "react-router-dom";

export const PlanetCard  = (props) => {
	return(
                    <div className="PlanetCard" >
                        {/* <img src="..." className="PlanetCard-img-top" alt="...">  */}
                        <div className="PlanetCard-body">
                            <h5 className="PlanetCard-title">{props.data.name}</h5>
                            <p className="PlanetCard-text">Population: {props.data.population}</p>
                            <p className="PlanetCard-text">Terrain: {props.data.terrain}</p>
                            <Link to={`/single/planets/${props.id}`}>
                            <button href="#" className="btn btn-primary">Learn more!</button>
                            </Link>
                        </div>
                    </div>              
    )
    
    };

    PlanetCard.propTypes ={
        data : PropTypes.object,
        id: PropTypes.integer
    }

    
