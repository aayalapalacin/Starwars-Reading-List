import PropTypes from "prop-types";
import React, { Component } from "react";

export const CharacterCard  = (props) => {
	return(
                    <div className="CharacterCard" >
                        {/* <img src="..." className="CharacterCard-img-top" alt="...">  */}
                        <div className="CharacterCard-body">
                            <h5 className="CharacterCard-title">{props.data.name}</h5>
                            <p className="CharacterCard-text">Gender: {props.data.gender}</p>
                            <p className="CharacterCard-text">Hair-Color: {props.data.hair_color}</p>
                            <p className="CharacterCard-text">Eye-Color: {props.data.eye_color}</p>

                            <a href="#" className="btn btn-primary">Learn more!</a>
                        </div>
                    </div>              
    )
    
    };

    CharacterCard.propTypes ={
        data : PropTypes.object
    }

    
