import PropTypes from "prop-types";
import React, { Component } from "react";
import { Link } from "react-router-dom";

export const PlanetCard  = (props) => {
	return(
                    <div className="fullCard" >
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHnr3avebwcV911YoWbSC0l8HwMo59SwE7CA&usqp=CAU" className="CharacterCard-img-top" alt="..."/> 
                        <div className="PlanetCard-body">
                            <h5 className="Card-title">{props.data.name}</h5>
                            <p className="Card-text">Population: {props.data.population}</p>
                            <p className="Card-text">Terrain: {props.data.terrain}</p>
                            <Link to={`/single/planets/${props.id}`}>
                            <button href="#" className="btn btn-outline-primary">Learn more!</button>
                            </Link>
                        </div>
                    </div>              
    )
    
    };

    PlanetCard.propTypes ={
        data : PropTypes.object,
        id: PropTypes.integer
    }

    
