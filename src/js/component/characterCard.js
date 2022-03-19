import PropTypes from "prop-types";
import React, { Component } from "react";
import { Link } from "react-router-dom";

export const CharacterCard  = (props) => {
	return(
                    <div className="fullCard" >
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHnr3avebwcV911YoWbSC0l8HwMo59SwE7CA&usqp=CAU" className="CharacterCard-img-top" alt="..."/> 
                        <div className="CharacterCard-body">
                            <h5 className="Card-title">{props.data.name}</h5>
                            <p className="Card-text">Gender: {props.data.gender}</p>
                            <p className="Card-text">Hair-Color: {props.data.hair_color}</p>
                            <p className="Card-text">Eye-Color: {props.data.eye_color}</p>
                            <Link to={`/single/characters/${props.id}`}>
                            <button href="#" className="btn btn-outline-primary">Learn more!</button>
                            </Link>
                        </div>
                    </div>              
    )
    
    };

    CharacterCard.propTypes ={
        data : PropTypes.object,
        id: PropTypes.integer
    }

    
