import PropTypes from "prop-types";
import React, { Component } from "react";
import { Link } from "react-router-dom";

export const CharacterCard  = (props) => {
	return(
                    <div className="CharacterCard" >
                        <img src="" className="CharacterCard-img-top" alt="..."/> 
                        <div className="CharacterCard-body">
                            <h5 className="CharacterCard-title">{props.data.name}</h5>
                            <p className="CharacterCard-text">Gender: {props.data.gender}</p>
                            <p className="CharacterCard-text">Hair-Color: {props.data.hair_color}</p>
                            <p className="CharacterCard-text">Eye-Color: {props.data.eye_color}</p>
                            <Link to={`/single/characters/${props.id}`}>
                            <button href="#" className="btn btn-primary">Learn more!</button>
                            </Link>
                        </div>
                    </div>              
    )
    
    };

    CharacterCard.propTypes ={
        data : PropTypes.object,
        id: PropTypes.integer
    }

    
